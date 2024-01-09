export interface Produit {
    code_prod: number;
    description: string;
    nom_prod: string;
    prix_unit: number;
    quantite: number;
  }
  
  export interface ProduitCommande {
    code_produit_commande: number;
    product: Produit;
    quantite_produit: number;
  }
  
  export interface Client {
    adresse: string;
    code_client: number;
    email: string;
    nom_client: string;
    prenom: string;
  }
  
  export interface Commande {
    client: Client;
    code_commande: number;
    date_commande: string;
    products: ProduitCommande[];
    total_command_amount: number;
    showDetails?: boolean; // Ajoutez la propriété showDetails en tant qu'optionnelle
  }