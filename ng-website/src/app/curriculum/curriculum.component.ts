import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { Cv } from '../models/cv.model';
import { CvService } from '../services/cv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curriculum',
  imports: [CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {
  cv!: Cv;

  constructor(private titleService: Title, private cvService: CvService)
  {
    this.titleService.setTitle('Marc-Antoine Gourdeau - CV');
    this.cv = this.cvService.getCv();
  }
}