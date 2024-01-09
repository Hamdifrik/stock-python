import { FormsModule } from '@angular/forms';

export interface  Produit {
    code_prod: number;
    quantite: number;
    description: string;
    nom_prod: string;
    prix_unit: number;
  }