import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product-td',
  templateUrl: './add-product-td.component.html',
  styleUrls: ['./add-product-td.component.css']
})
export class AddProductTDComponent {
  product: any = {
    productId: null,
    code: '',
    libelle: '',
    prixUnitaire: null

}

   
  additionalFieldsVisible = false; // Déclaration de la variable

  onSubmit(productForm: any) {
    // Gérez ici la soumission du formulaire

    // Après la soumission du formulaire, affichez les champs supplémentaires
    this.additionalFieldsVisible = true;
  }

}




