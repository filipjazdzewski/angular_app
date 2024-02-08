import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent, GoBackButtonComponent],
  imports: [CommonModule, RouterModule, ButtonModule],
  exports: [PageNotFoundComponent, GoBackButtonComponent],
})
export class SharedModule {}
