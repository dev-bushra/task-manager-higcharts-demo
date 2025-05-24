import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    let res = this.http.get<Client[]>(this.apiUrl);
    console.log('getClients res:', res);
    return res;
  }

  getClientById(id: number): Observable<Client> {
    let res = this.http.get<Client>(`${this.apiUrl}/${id}`);
    console.log('getClientsById res:', res);
    return res;
  }

  createClient(client: Client): Observable<Client> {
    let res = this.http.post<Client>(this.apiUrl, client);
    console.log('createClient res:', res);
    return res;
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${client.id}`, client);
  }

  deleteClient(id: number): Observable<any> {
    let res = this.http.delete(`${this.apiUrl}/${id}`);
    console.log('deleteClient res:', res);
    return res;
  }
}
