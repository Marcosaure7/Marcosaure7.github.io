import { Component, Input } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../models/project.model';
import { Tag } from '../models/tag.model';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectCardComponent,
    ProjectCardComponent,
    CommonModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
  protected project_list : Project[];

  constructor(private titleService: Title, private readonly projetsService : ProjectsService)
  {
    this.titleService.setTitle('Marc-Antoine Gourdeau - Portfolio');
    this.project_list = this.projetsService.projets;
  }
  
}
