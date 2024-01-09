import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/client.service';
import { Router } from '@angular/router';
import { Commande } from 'app/addcommande/commande.model';
import { MatDialog } from '@angular/material/dialog';
import { CommandeDetailsDialogComponent } from 'app/commande-details-dialog/commande-details.component';

@Component({
  selector: 'app-tableCommande',
  templateUrl: './tableCommande.component.html',
  styleUrls: ['./tableCommande.component.css']
})
export class TableCommandeComponent implements OnInit {
  products: Commande[];

  constructor(private dialog: MatDialog, private router: Router, private clientService: ClientService) {}

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
        this.products = Array.isArray(data) ? data : [data];
      },
      (error) => {
        console.error('Error fetching commandes:', error);
      }
    );
  }
}
