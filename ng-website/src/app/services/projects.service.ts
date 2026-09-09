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
      link: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
      imagesSrc: ['assets/site-web.png'],
      enable: true
    },
    {
      id: 1,
      name: 'Badminton Trajectory Calculator',
      link: 'https://github.com/Marcosaure7/BadmintonTrajectory',
      descripiton: '',
      summary: 'Un traceur de trajectoire de volant de badminton pour un lanceur mécanique.',
      tags: [Tag.PYTHON],
      imagesSrc: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'],
      enable: true
    },
    {
      id: 2,
      name: 'Kingdom-Fall',
      link: 'https://github.com/Marcosaure7/Kingdom-Fall',
      descripiton: '',
      summary: 'Jeu RPG tour par tour.',
      tags: [Tag.CSHARP, Tag.AVALONIA],
      imagesSrc: ['assets/king-fall/image1.png', 'assets/king-fall/image2.png', 'assets/king-fall/image3.png'],
      enable: true
    },
    {
      id: 3,
      name: 'Electromagnetic Analyzer (WIP)',
      link: '',
      descripiton: '',
      summary: 'Un analyseur électromagnétique permettant de visualiser un objet.',
      tags: [Tag.CPP, Tag.QT],
      imagesSrc: [],
      enable: false
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
