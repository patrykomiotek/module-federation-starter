import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTES } from './login.routes';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(LOGIN_ROUTES)],
  declarations: [LoginComponent],
})
export class LoginModule {}
