import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  static readonly FEATURED_ID : number = 2;

  private project_list: Project[] = [
    {
      id: 0,
      name: 'Site web Portfolio',
      summary: 'Le site internet que vous naviguez présentement.',
      descripiton: 'Un de mes premiers sites Angular, fait spécialement pour me présenter et démontrer mes capacités en développement web.',
      link: 'marcosaure7.github.io',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
      imagesSrc: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png']
    },
    {
      id: 1,
      name: 'Badminton Trajectory Calculator',
      link: '',
      descripiton: '',
      summary: 'Un traceur de trajectoire de volant de badminton pour un lanceur mécanique.',
      tags: [Tag.PYTHON],
      imagesSrc: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png']
    },
    {
      id: 2,
      name: 'Kingdom-Fall',
      link: '',
      descripiton: '',
      summary: 'Jeu RPG tour par tour.',
      tags: [Tag.JAVA, Tag.JAVAFX],
      imagesSrc: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png']
    },
  ]

  constructor() { }

  get projets(): Project[] {
    return this.project_list;
  }

  getProjectById(id: number): Project { 
    let project = this.project_list.find((project) => project.id === id);

    if (!project) {
      throw new TypeError('There is no project that matches the id : ' + id);
    }

    return project;
  }
}
