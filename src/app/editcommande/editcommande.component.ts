// editcommande.component.ts
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../addclient/client.model';
import { Produit } from '../addproduit/produit.model';
import { Commande } from './commande.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcommande',
  templateUrl: './editcommande.component.html',
  styleUrls: ['./editcommande.component.css']
})
export class EditCommandeComponent implements OnInit {
  codeCommande: number;
  commande: Commande = {
    codeCommande: 0,
    client: { code_client: 0 },
    products: [],
  };

  clients: Client[] = [];
  products: Produit[] = [];

  // Initialisez ces deux tableaux
  selectedProductNames: string[] = [];
  selectedQuantities: number[] = [];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Fetch clients from the server
    this.clientService.getClients().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error fetching clients:', error);
      }
    );

    // Retrieve the codeCommande from route parameters
    this.route.params.subscribe((params) => {
      this.codeCommande = +params['id']; // Assuming 'id' is the parameter name, convert it to a number if needed

      // Use codeCommande to fetch the specific command from the server
      this.clientService.getCommandeById(this.codeCommande).subscribe(
        (commande) => {
          this.commande = commande;

          // Initialisez les tableaux ici après avoir récupéré la commande
          this.commande.products.forEach((product, index) => {
            this.selectedProductNames[index] = this.getSelectedProductName(product.code_prod);
            this.selectedQuantities[index] = product.quantite;
          });
        },
        (error) => {
          console.error('Error fetching commande:', error);
          // Handle the error
        }
      );
    });

    // Fetch products from the server
    this.clientService.getProduct().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  getSelectedProductName(codeProd: number): string {
    const selectedProduct = this.products.find(prod => prod.code_prod === codeProd);
    return selectedProduct ? selectedProduct.nom_prod : '';
  }
  selectedProductName(index: number): string {
    const selectedProductCode = this.commande.products[index].code_prod;
    const selectedProduct = this.products.find(prod => prod.code_prod === selectedProductCode);
    return selectedProduct ? selectedProduct.nom_prod : '';
  }

  selectedProductQuantity(index: number): number {
    return this.commande.products[index].quantite;
  }

  editCommande() {
    // Ensure that codeCommande has a valid value before calling the service
    if (this.codeCommande !== undefined && this.codeCommande !== null) {
      this.clientService.updateCommande(this.codeCommande, this.commande).subscribe(
        (response) => {
          this.router.navigate(['/tableco']);
        },
        (error) => {
          console.error('Error updating commande:', error);
          // Display an error message to the user if needed
        }
      );
    } else {
      console.error('Invalid codeCommande');
      // Handle the case where codeCommande is not set
    }
  }

  addProduct() {
    // Ajouter un nouveau produit avec des valeurs par défaut
    this.commande.products.push({
      code_prod: 0,
      quantite: 0
    });
  }

  removeProduct(index: number) {
    // Supprimer le produit à l'index spécifié
    this.commande.products.splice(index, 1);
  }
}
