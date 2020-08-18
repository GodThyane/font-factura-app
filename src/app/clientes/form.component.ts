import { Component, OnInit } from '@angular/core';
import {Cliente} from '../models/Cliente';
import {ClienteService} from '../services/cliente.service';
import {Router} from '@angular/router';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  titulo: 'Crear usuario';

  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private notificacion: NotificationsService
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  create() {
    this.clienteService.createCliente(this.cliente).subscribe(
      response => {
        this.onSuccess('Cliente creado');
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
