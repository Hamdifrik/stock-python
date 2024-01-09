import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableproduit',
  templateUrl: './tableproduit.component.html',
  styleUrls: ['./tableproduit.component.css']
})
export class TableProductComponent implements OnInit {
  data: any[]; // Renommer la variable products à data

  constructor(private router: Router, private clientService: ClientService) {}

  showAddProduitForm() {
    this.router.navigate(['/addproduit']);
  }

  ngOnInit(): void {
    this.clientService.getProduct().subscribe(
      (data) => {
        console.log("Données reçues :", data);
        this.data = data;
      },
      (error) => {
        if (error.status === 0) {
          console.error('Erreur de connexion au serveur : Vérifiez que le serveur est en cours d\'exécution.');
        } else {
          console.error('Erreur lors de la récupération des produits :', error);
        }
      }
    );
  }
  
  

  editProduit(codeProduit: number): void {
    this.router.navigate(['/editproduit', codeProduit]);
  }
}
