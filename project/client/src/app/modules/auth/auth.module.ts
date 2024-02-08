import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
  ],
})
export class AuthModule {}
