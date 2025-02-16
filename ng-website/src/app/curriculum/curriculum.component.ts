import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-curriculum',
  imports: [],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {
  constructor(private titleService: Title)
  {
    this.titleService.setTitle('Marc-Antoine Gourdeau - CV');
  }
}
