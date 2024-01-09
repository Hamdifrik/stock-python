import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/client.service';
import { Router } from '@angular/router';
import { CommandeDetailsDialogComponent } from 'app/commande-details-dialog/commande-details.component';
import { Commande } from './commande.model';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TablecoComponent implements OnInit {
  clients: any[];

  constructor(private dialog: MatDialog,private router: Router, private clientService: ClientService) {}
  showAddCommandeForm() {
    this.router.navigate(['/addcommande']);
  }

  showDetails(prod: Commande) {
    const dialogRef = this.dialog.open(CommandeDetailsDialogComponent, {
      data: prod,
    });
  }

  editCommand(codeCommande: number) {
    this.router.navigate(['/editcommande', codeCommande]);
  }
  

  ngOnInit(): void {
    this.clientService.getCommande().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error fetching clients:', error);
        console.error('Unhandled promise rejection');
      }
    );
  }

  deleteClient(codeClient: number): void {
    
    this.clientService.deleteClient(codeClient).subscribe(
      (data) => {
        
        this.clients = this.clients.filter(client => client.code_client !== codeClient);
      },
      (error) => {
        console.error('Erreur lors de la suppression du client :', error);
        
      }
    );
  }

  editProduit(codeProduit: number): void {
    this.router.navigate(['/editproduit', codeProduit]);
  }
  
}
