// commande.model.ts

export interface CommandeItem {
    description: string;
    quantity: number;
    price: number;
  }
  
  export interface Commande {
    code_commande: number;
    date_commande: string;
    client: {
      nom_client: string;
      prenom: string;
    };
    total_command_amount: number;
    // ... autres propriétés
  
    // Ajoutez ces propriétés manquantes
    showDetails?: boolean;
    
  }
  