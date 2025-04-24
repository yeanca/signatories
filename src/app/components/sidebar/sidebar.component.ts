import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faInbox,
  faBoxArchive,
  faRightFromBracket,
  faBars
} from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  collapsed = false;

  // Font Awesome icons
  faHouse = faHouse;
  faInbox = faInbox;
  faBoxArchive = faBoxArchive;
  faLogout = faRightFromBracket;
  faBars = faBars;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
