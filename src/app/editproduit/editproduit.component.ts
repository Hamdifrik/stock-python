import { Component, OnInit } from '@angular/core';
import { Produit } from './produit.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'app/client.service';

@Component({
  selector: 'app-editproduit',
  templateUrl: './editproduit.component.html',
  styleUrls: ['./editproduit.component.css']
})
export class EditproduitComponent implements OnInit {
  
  produit: Produit = {
    code_prod: 0,
    description: '',
    prix_unit: 0,
    quantite: 0,
    nom_prod: ''
  };

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getProduit();
  }
  
  getProduit() {
    const codeProduit = +this.route.snapshot.params['id'];
    this.clientService.getProduct().subscribe(
      (produits) => {
        const produit = produits.find(c => c.code_prod === codeProduit);
        if (produit) {
          this.produit = { ...produit };
        } else {
          console.error('Product not found:', codeProduit);
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
  addProduit() {
    this.clientService.addProduit(this.produit).subscribe(
      (response) => {
        
        this.router.navigate(['/tablep']);
      },
      (error) => {
        console.error('Error adding client:', error);
      }
    );
  }
  updateProduit() {
    this.clientService.updateProduit(this.produit.code_prod, this.produit).subscribe(
      (data) => {
        console.log('Produit updated successfully:', data);
        this.router.navigate(['/tablep']);
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  }

}
