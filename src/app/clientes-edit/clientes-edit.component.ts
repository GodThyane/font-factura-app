import {Component, OnInit} from '@angular/core';
import {Cliente} from '../models/Cliente';
import {ClienteService} from '../services/cliente.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.css']
})
export class ClientesEditComponent implements OnInit {
  titulo: 'Editar usuario';

  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private notificacion: NotificationsService
  ) {
  }

  ngOnInit(): void {
    this.getClient();
  }

  edit() {
    this.clienteService.updateClient(this.cliente).subscribe(
      response => {
        this.onSuccess('Cliente modificado');
        setTimeout(() => {
          console.log('sleep');
          this.router.navigate(['/clientes']);
          this.cliente = new Cliente();
          // And any other code that should run only after 5s
        }, 1500);
      },
      error => {
        this.onError('Error en la matriz');
      }
    );
  }

  getClient() {
    this.route.params.forEach((params: Params) => {
      const id = params.id;
      this.clienteService.getClient(id).subscribe(
        response => {
          this.cliente = response;
        },
        error => {
          console.log(error as any);
        }
      );

    });
  }

  onSuccess(message){
    this.notificacion.success('Completado', message, {
      position: ['botton', 'right'],
      timeOut: 1500,
      animate: 'fade',
      showProgressBar: true,
    });
  }

  onError(message){
    this.notificacion.error('Error', message, {
      position: ['botton', 'right'],
      timeOut: 1500,
      animate: 'fade',
      showProgressBar: true,
    });
  }
}
