// commande.model.ts
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
