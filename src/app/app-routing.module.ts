import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClientesComponent} from './clientes/clientes.component';
import {FormComponent} from './clientes/form.component';
import {ClientesEditComponent} from './clientes-edit/clientes-edit.component';

const routes: Routes = [
  {
    path: 'home', component: ClientesComponent
  },
  {
    path: 'clientes', component: ClientesComponent,
  },
  {
    path: 'add/clientes', component: FormComponent,
  },

  {
    path: 'editar-cliente/:id', component: ClientesEditComponent
  },
  {
    path: '**', component: ClientesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
