// addclient.component.ts
import { Component, OnInit } from '@angular/core';
import { Client } from './client.model'
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    adresse: '',
    code_client: 0,
    email: '',
    nom_client: '',
    prenom: ''
  };

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {}

  addClient() {
    this.clientService.addClient(this.client).subscribe(
      (response) => {
        
        this.router.navigate(['/table']);
      },
      (error) => {
        console.error('Error adding client:', error);
      }
    );
  }
}
