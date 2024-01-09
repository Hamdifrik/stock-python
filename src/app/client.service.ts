// client.service.ts

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './addclient/client.model';
import { Produit } from './addproduit/produit.model';
import { Commande } from './addcommande/commande.model';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://127.0.0.1:5000/api/client';
  private apiUrlP = 'http://127.0.0.1:5000/api/product';
  private apiUrlC = 'http://127.0.0.1:5000/api/commande';
  private apiUrlAC = 'http://127.0.0.1:5000/api/client'; 
  private apiUrlAP = 'http://127.0.0.1:5000/api/product'; 

  constructor(private http: HttpClient) { }

  

  addClient(client: Client): Observable<any> {
    return this.http.post(this.apiUrlAC, client);
  }

  addProduit(produit: Produit): Observable<any> {
    return this.http.post(this.apiUrlAP, produit);
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }
  
  

  getProduct(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrlP)
      .pipe(
        catchError(error => {
          console.error('Error fetching products:', error);
          throw error; // Rethrow the error after logging
        })
      );
  }
  

  getCommande(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.apiUrlC);
  }

  getCommandeById(codeCommande: number): Observable<Commande> {
    const url = `${this.apiUrlC}/${codeCommande}`;

    const options = {
      withCredentials: true,
    };

    return this.http.get<Commande>(url, options);
  }

  addCommande(commande: Commande, codeClient: number): Observable<any> {
    const {  products } = commande;
    

    return this.http.post(`${this.apiUrlC}/${codeClient}`, {  products });
  }
  
  updateClient(codeClient: number, updatedClient: Client): Observable<any> {
    const url = `${this.apiUrl}/${codeClient}`;
  
   
    const options = {
      withCredentials: true,
    };
  
    return this.http.put(url, updatedClient, options);
  }

  updateCommande(codeCommande: number, updatedCommande: Commande): Observable<any> {
    const url = `${this.apiUrlC}/${codeCommande}`;
    const options = {
      withCredentials: true,
    };
    return this.http.put(url, updatedCommande, options);
  }
  

  updateProduit(codeProduit: number, updatedProduit: Produit): Observable<any> {
    const url = `${this.apiUrlP}/${codeProduit}`;
  
   
    const options = {
      withCredentials: true,
    };
  
    return this.http.put(url, updatedProduit, options);
  }



  deleteClient(codeClient: number): Observable<any> {
    const url = `${this.apiUrl}/${codeClient}`;

    // Configurez les options pour inclure les informations d'identification
    const options = {
      withCredentials: true,
    };

    // Envoyer une requête DELETE à l'API
    return this.http.delete(url, options);
  }

}
