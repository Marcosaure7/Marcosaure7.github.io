import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {CurriculumComponent} from './curriculum/curriculum.component';
import {ContactComponent} from './contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];
