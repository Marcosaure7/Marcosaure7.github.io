import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  constructor(private titleService: Title)
  {
    this.titleService.setTitle('Marc-Antoine Gourdeau - Portfolio');
  }
}
