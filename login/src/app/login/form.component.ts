import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
      @if (isLoggedIn$ | async) {
      <div>User is logged in!</div>
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

  isLoggedIn$ = this.loginService.isUserLoggedIn$;

  login() {
    this.loginService.checkCredentials(this.username, this.password);
  }
}
