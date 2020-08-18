import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';

import { ClienteService} from './services/cliente.service';
import { HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule} from 'angular2-notifications';
import { ClientesEditComponent } from './clientes-edit/clientes-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    FormComponent,
    ClientesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, SimpleNotificationsModule.forRoot()
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
