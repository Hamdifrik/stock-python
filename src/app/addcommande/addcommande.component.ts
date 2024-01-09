import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../addclient/client.model';
import { Produit } from '../addproduit/produit.model';
import { Commande } from './commande.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcommande',
  templateUrl: './addcommande.component.html',
  styleUrls: ['./addcommande.component.css']
})
export class AddCommandeComponent implements OnInit {
  commande: Commande = {
    codeCommande: 0,
    client: { code_client: 0 /* autres propriétés du client */ },
    products: [],
    // autres propriétés de la commande
  };


  clients: Client[] = [];
  products: Produit[] = [];

  constructor(private clientService: ClientService, private router: Router) {}

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

  addCommande() {
    // Récupérer l'identifiant du client à partir de la sélection du formulaire
    const codeClient = this.commande.client.code_client;

    // Envoyer les données de la commande au serveur
    this.clientService.addCommande(this.commande, codeClient).subscribe(
      (response) => {
        this.router.navigate(['/tableco']);
      },
      (error) => {
        console.error('Error adding commande:', error);
        // Affichez un message d'erreur à l'utilisateur si nécessaire
      }
    );
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
