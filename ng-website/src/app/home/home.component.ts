import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project.model';
import { CarouselComponent, SlideComponent } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CarouselComponent, SlideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  static readonly FEATURED_ID : number = 2;

  profilePicturePath = "../../assets/pdp.jpg";
  featuredProject : Project;

  constructor(private titleService: Title, private readonly projectsService: ProjectsService)
  {
    this.titleService.setTitle('Marc-Antoine Gourdeau - Home');
    this.featuredProject = this.projectsService.getProjectById(HomeComponent.FEATURED_ID);
  }
}
