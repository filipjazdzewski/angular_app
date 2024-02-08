import { Component } from '@angular/core';

interface LayoutState {
  profileSidebarVisible: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public state: LayoutState = {
    profileSidebarVisible: false,
  };

  public showProfileSidebar(): void {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
  }
}
