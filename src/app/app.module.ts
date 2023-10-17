import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ListuserComponent } from './listuser/listuser.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponentComponent,
    ListFournisseurComponent,
    NavbarComponent,
    UsersComponent,
    ListuserComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
