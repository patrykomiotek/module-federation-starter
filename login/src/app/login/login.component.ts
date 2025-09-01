import { Component, signal } from '@angular/core';

@Component({
  selector: 'login-component',
  standalone: false,
  template: `
    <div class="content">
      <div class="left-side">
        <h1>Login component</h1>
        <login-form></login-form>
      </div>
    </div>
  `,
  styles: [
    `
      .content {
        padding: 20px;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .left-side {
        max-width: 400px;
        margin: 0 auto;
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }
      h1 {
        text-align: center;
        margin-bottom: 30px;
        color: #333;
        font-size: 2rem;
        font-weight: 300;
      }
    `,
  ],
})
export class LoginComponent {
  protected readonly title = signal('login-component');
  protected readonly name = signal('John Doe');
}
