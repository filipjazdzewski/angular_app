import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
