import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TablepComponent implements OnInit {
  clients: any[];

  constructor(private router: Router, private clientService: ClientService) {}
  showAddProduitForm() {
    this.router.navigate(['/addproduit']);
  }
  

  ngOnInit(): void {
    this.clientService.getProduct().subscribe(
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
