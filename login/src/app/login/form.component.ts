import { CommonModule } from '@angular/common';
import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <form class="login-form" (ngSubmit)="login()">
        <input type="text" name="username" [(ngModel)]="username" placeholder="Username" />
        <input type="password" name="password" [(ngModel)]="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>

      @if (loginMessage()) {
      <div class="message" [class.success]="isSuccess()" [class.error]="!isSuccess()">
        {{ loginMessage() }}
      </div>
      } @if (isLoggedIn()) {
      <div class="success-message">User is logged in!</div>
      <button (click)="logout()" class="logout-btn">Logout</button>
      }
    </div>
  `,
  styles: [
    `
      .login-app {
        width: 30vw;
        border: 2px dashed black;
        padding: 8px;
        margin: 0 auto;
      }
      .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 8px;
        gap: 10px;
      }
      .message {
        margin-top: 10px;
        padding: 8px;
        border-radius: 4px;
        text-align: center;
      }
      .success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
      }
      .error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
      }
      .success-message {
        margin-top: 10px;
        padding: 8px;
        background-color: #d4edda;
        color: #155724;
        border-radius: 4px;
        text-align: center;
      }
      .logout-btn {
        margin-top: 10px;
        padding: 8px 16px;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      .logout-btn:hover {
        background-color: #c82333;
      }
      label {
        display: block;
      }
    `,
  ],
})
export class LoginForm {
  private loginService = inject(LoginService);
  username = '';
  password = '';

  // Create a computed signal that reactively tracks the login state
  isLoggedIn = computed(() => this.loginService.isLoggedIn());

  loginMessage = signal('');
  isSuccess = signal(false);

  login() {
    if (!this.username || !this.password) {
      this.loginMessage.set('Please enter both username and password');
      this.isSuccess.set(false);
      return;
    }

    const success = this.loginService.checkCredentials(this.username, this.password);

    if (success) {
      this.loginMessage.set('Login successful!');
      this.isSuccess.set(true);
      this.username = '';
      this.password = '';
    } else {
      this.loginMessage.set('Invalid credentials. Use admin/admin');
      this.isSuccess.set(false);
    }
  }

  logout() {
    this.loginService.logout();
    this.loginMessage.set('');
    this.isSuccess.set(false);
  }
}
