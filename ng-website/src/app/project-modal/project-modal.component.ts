import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../models/project.model';
import { CarouselComponent, SlideComponent } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  imports: [CarouselComponent, SlideComponent, CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {

  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) {}
}
