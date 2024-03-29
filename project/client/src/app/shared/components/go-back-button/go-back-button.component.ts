import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-go-back-button',
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.scss',
})
export class GoBackButtonComponent {
  public constructor(private location: Location) {}

  public goBack(): void {
    this.location.back();
  }
}
