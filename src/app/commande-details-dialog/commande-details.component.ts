import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Commande } from './commande.model';



@Component({
  selector: 'app-commande-details-dialog',
  templateUrl: './commande-details-dialog.component.html',
  styleUrls: ['./commande-details-dialog.css']
})
export class CommandeDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Commande) {}

  calculateTotal(products: any[]): number {
    return products.reduce((acc, product) => acc + (product.product?.prix_unit || 0) * product.quantite_produit, 0);
  }

 
  
}
