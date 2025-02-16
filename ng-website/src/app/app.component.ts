import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './header/app-header.component';
import { NavComponent } from './nav/nav.component';


@Component({
  imports: [
    AppHeaderComponent,
    NavComponent,
    RouterOutlet,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})

export class AppComponent {
  title = 'Marc-Antoine Gourdeau';
}
