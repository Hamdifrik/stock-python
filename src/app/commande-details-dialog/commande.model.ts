// Modifiez votre modèle Commande pour inclure toutes les propriétés nécessaires
export interface Commande {
    client: {
      adresse: string;
      code_client: number;
      email: string;
      nom_client: string;
      prenom: string;
    };
    code_commande: number;
    date_commande: string;
    products: Array<{
      code_produit_commande: number;
      product: {
        code_prod: number;
        description: string;
        nom_prod: string;
        prix_unit: number;
        quantite: number;
      };
      quantite_produit: number;
    }>;
    total_command_amount: number;
  }
  