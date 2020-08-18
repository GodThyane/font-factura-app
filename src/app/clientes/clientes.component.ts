import {Component, OnInit} from '@angular/core';
import {Cliente} from '../models/Cliente';
import {ClienteService} from '../services/cliente.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listClient: Cliente[];
  title = 'Lista de clientes';

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clienteService.getClientes().subscribe(
      data => {

        this.listClient = data;
      },
      error => {
        const errorMessage = error as any;
        console.log(errorMessage);
      }
    );
  }

  delete(id: number) {
    this.clienteService.deleteCliente(id).subscribe(
      data => {
        this.getClients();
      },
      error => {
        const errorMessage = error as any;
        console.log(errorMessage);
      }
    );
  }
}
