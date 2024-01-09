// command.model.ts

/*export interface Commande {
  client: {
    code_client: number;
    // autres propriétés du client
  };
  products: {
    code_prod: number;
    quantite: number;
    // autres propriétés du produit
  }[];
  // autres propriétés de la commande
}*/




// addcommande/commande.model.ts
export interface Commande {
  codeCommande: number;
  client: {
    code_client: number;
  };
  products: {
    code_prod: number;
    quantite: number;
  }[];
}

