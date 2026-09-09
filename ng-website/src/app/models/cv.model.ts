export interface Cv {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    postesRech: string[];
    description: string;
    experiences: Experience[];
    competences: Competence[];
    etudes: Experience[];
    engagementsSociaux: Experience[];
    bourses: string[];
  }

  export interface Tache {
    description: string;
    sousTaches?: Tache[]
  }
  
  export interface Experience {
    poste: string;
    entreprise: string;
    lieu: string;
    debut: string;
    fin: string;
    taches?: Tache[];
  }

  export interface Competence {
    groupe: string,
    elements: string[]
  }