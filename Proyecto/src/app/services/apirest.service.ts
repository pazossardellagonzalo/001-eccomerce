import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente, iCliente } from "../models/cliente";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  URLAPI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    const url = `${this.URLAPI}/getClientes`;
    return this.http.get<Cliente[]>(url);
  }

  getCliente(dni: string): Observable<any> {
    const url = `${this.URLAPI}/getCliente/${dni}`;
    return this.http.get(url);
  }

  postCliente(doc: any): Observable<any> {
    const url = `${this.URLAPI}/postCliente`;
    return this.http.post(url, doc);
  }

  deleteCliente(dni: string): Observable<any>{
    const url = `${this.URLAPI}/delCliente/${dni}`;
    return this.http.delete(url);
  }

  putCliente(dni: string, cliente: iCliente ): Observable<any> {
    const url = `${this.URLAPI}/putCliente/${dni}`;
    return this.http.put(url, cliente);
  }

}
