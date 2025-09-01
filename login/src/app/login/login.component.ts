import { Component, signal } from '@angular/core';

@Component({
  selector: 'login-component',
  standalone: false,
  template: `
    <div class="content">
      <div class="left-side">
        <h1>Login component</h1>
      </div>
    </div>
  `,
})
export class LoginComponent {
  protected readonly title = signal('login-component');
  protected readonly name = signal('John Doe');
}
