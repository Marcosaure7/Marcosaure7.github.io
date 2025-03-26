import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  getCv(): Cv {
    return {
      nom: 'Gourdeau',
      prenom: 'Marc-Antoine',
      email: 'mag2003@outlook.com',
      telephone: '(418) 284-1118',
      postesRech: [
        'Service à la clientèle', 'informatique/technologie'
      ],
      description: "Étudiant en voie de devenir ingénieur logiciel, parfaitement bilingue, j’ai toujours été passionné de"
                + "l’informatique. J’ai travaillé en tant que préposé à l’accueil plusieurs étés consécutifs chez Parkbridge."
                + "Je suis ensuite devenu annotateur de données IA, où mes talents en programmation fut à l’épreuve."
                + "Mon parcours professionnel m’a ensuite amené chez Best Buy en tant qu’agent Geek Squad, où j’ai fait de"
                + "la configuration d’ordinateurs et de la réparation d’appareils divers (téléphones, ordinateurs). Je suis"
                + "présentement stagiaire, où la programmation et le travail d’équipe sont mon quotidien.",
      experiences: [
        {
          poste: 'Stagiaire en développement logiciel',
          entreprise: 'Vanderlande',
          lieu: 'Québec',
          debut: 'Jan 2025',
          fin: 'Auj.',
          taches: [
            { description: 'Développement en continu assurant une qualité du code de niveau professionnel sous plusieurs langages comme TS, Node.js' },
            { description: 'Participation active à la recherche/développement d’une preuve de concept comme étant un module réutilisable dockerisé générant des notifications Push pour une app Web', 
              sousTaches: [
                { description: 'Travail en équipe avec un 2e stagiaire' },
                { description: 'Démonstration de la preuve de concept devant l’équipe et les supérieurs '},
              ]
            },
            { description: 'Collaboration avec l’équipe en environnement Agile (Scrum quotidien), encourageant une approche itérative et orientée-solution', 
              sousTaches: [
                { description: 'Pratiques DevOps' },
                { description: 'Suivi et mise à jour de Jira' },
                { description: 'Sprints durant chacun 2 semaines' },
                { description: 'Développement itératif et mise à jour du code à l’aide de Git' },
              ]
            },
          ]
        },
        {
          poste: 'Agent Geek Squad',
          entreprise: 'Best Buy',
          lieu: 'Laurier Québec',
          debut: 'Nov 2024',
          fin: 'Jan 2025',
          taches: [
            { description: 'Installer et configurer Windows sur des produits achetés' },
            { description: "Réparer des défauts logiciels/physiques d'ordinateurs et téléphones" },
            { description: 'Répondre/aider les clients au comptoir ou au téléphone avec leurs appareils personnels',
              sousTaches: [
                { description: 'Parfois effectuer des réparations mineurs selon le cas' }
              ]
            }
          ]
        },
        {
          poste: 'Annoptateur de données en IA',
          entreprise: 'Data Annotation Tech',
          lieu: 'En ligne',
          debut: 'Sep 2024',
          fin: 'Nov 2024'
        },
        {
          poste: "Préposé à l'accueil",
          entreprise: 'Parkbridge Domaine Parc Estrie',
          lieu: 'Magog',
          debut: 'Mai 2023',
          fin: 'Août 2024'
        },
        {
          poste: "Préposé à l'accueil",
          entreprise: 'Parkbridge Camping Panoramique',
          lieu: 'Portneuf',
          debut: 'Mai 2019',
          fin: 'Avril 2023'
        },
      ],
      competences: [
          {
            groupe: 'Logiciels',
            elements: ['Word', 'PowerPoint', 'Excel', 'LaTeX']
          },
          {
            groupe: 'Langages de programmation',
            elements: ['Java (Maven, SpringBoot)', 'C++', 'Python', 'TypeScript', 'Node.js', 'MySQL']
          },
          {
            groupe: 'Outils et technologies',
            elements: ['Git', 'GitHub/GitLab', 'Docker', 'Kubernetes', 'Angular', 'VS Code', 'JetBrains Suite']
          },
          {
            groupe: 'Méthodologies',
            elements: ['DevOps', 'Agile (Scrum)']
          }
      ],
      etudes: [
        {
          poste: "Baccalauréat en génie logiciel (4e session terminée)",
          entreprise: 'Université Laval',
          lieu: 'Québec',
          debut: 'Jan 2023',
          fin: 'Auj.'
        },
        {
          poste: "Sciences informatiques et mathématiques",
          entreprise: 'Cégep Limoilou',
          lieu: 'Québec',
          debut: 'Août 2020',
          fin: 'Dec 2022'
        },
      ],
      engagementsSociaux: [
        {
          poste: 'Tutorat en mathématiques et physique',
          entreprise: 'Cégep Limoilou',
          lieu: 'Québec',
          debut: '2021',
          fin: '2022'
        }
      ],
      bourses: ['Bourse académique du mérite étudiant de 1000$ de la Fondation Cégep Limoilou']
    };
  }
}