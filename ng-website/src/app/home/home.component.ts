import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  profilePicturePath = "../../assets/pdp.jpg";

  constructor(private titleService: Title)
  {
    this.titleService.setTitle('Marc-Antoine Gourdeau - Home');
  }
}
