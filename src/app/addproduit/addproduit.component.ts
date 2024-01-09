// addproduit.component.ts
import { Component, OnInit } from '@angular/core';
import { Produit } from './produit.model'
import { Router } from '@angular/router';
import { ClientService } from 'app/client.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  produit: Produit = {
    code_prod: 0,
    description: '',
    prix_unit: 0,
    quantite: 0,
    nom_prod: ''
  };
  
 

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {}

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
}
