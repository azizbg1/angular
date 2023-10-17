import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  invoiceId?: number;
  isActive?: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   {
      this.invoiceId = this.route.snapshot.params['invoiceId'];
      this.isActive = this.route.snapshot.params['active'] === 'true';

    };
  }
  goBack() {
    this.router.navigate(['/main-invoice']); // Redirige vers le composant MainInvoiceComponent
  }
}
