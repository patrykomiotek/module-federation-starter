import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTES } from './login.routes';
import { LoginComponent } from './login.component';
import { LoginForm } from './form.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(LOGIN_ROUTES), LoginForm],
  declarations: [LoginComponent],
})
export class LoginModule {}
