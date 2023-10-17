import { Component } from '@angular/core';
import { InvoiceComponent } from '../invoice/invoice.component'; // Importez la classe Invoice, pas le composant

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})

export class InvoiceListComponent {

  list: InvoiceComponent[] = [
    { invoiceId: 1, montantFacture: 120, montantRemise: 10, dateFacture: "12/12/2021", active: true },
    // Ajoutez d'autres factures ici
  ];

}
