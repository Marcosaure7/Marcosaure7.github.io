import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
