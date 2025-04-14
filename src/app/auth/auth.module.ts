import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [RegisterComponent, LoginFormComponent],
  exports: [LoginFormComponent, RegisterComponent],
  imports: [CommonModule],
})
export class AuthModule {}
