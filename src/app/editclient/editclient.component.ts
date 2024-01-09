import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';
import { ClientService } from '../client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditClientComponent implements OnInit {
  client: Client = {
    adresse: '',
    code_client: 0,
    email: '',
    nom_client: '',
    prenom: ''
  };

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getClient();
  }

  getClient() {
    const codeClient = +this.route.snapshot.params['id'];
    this.clientService.getClients().subscribe(
      (clients) => {
        const client = clients.find(c => c.code_client === codeClient);
        if (client) {
          this.client = { ...client };
        } else {
          console.error('Client not found:', codeClient);
        }
      },
      (error) => {
        console.error('Error fetching clients:', error);
      }
    );
  }

  updateClient() {
    this.clientService.updateClient(this.client.code_client, this.client).subscribe(
      (data) => {
        console.log('Client updated successfully:', data);
        this.router.navigate(['/table']);
      },
      (error) => {
        console.error('Error updating client:', error);
      }
    );
  }
}
