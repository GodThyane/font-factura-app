import {Injectable} from '@angular/core';
import {Cliente} from '../models/Cliente';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';

@Injectable()
export class ClienteService {

  private urlEndPoint = 'http://localhost:8080/api/clientes';

  constructor(
private http: HttpClient
  ) {

  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Cliente[])
    );
  }

  createCliente(cliente: Cliente): Observable<any>{
    return this.http.post(this.urlEndPoint, cliente);

  }

  deleteCliente(id: number): Observable<any>{
    return this.http.delete(this.urlEndPoint + '/' + id);
  }

  updateClient(cliente: Cliente): Observable<any>{
    return this.http.put(this.urlEndPoint + '/' + cliente.id, cliente);
  }

  getClient(id): Observable<any>{
    return this.http.get(this.urlEndPoint + '/' + id);
  }
}
