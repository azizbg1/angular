import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent {
  
  idFournisseur: number = 105;
  code: string = 'A104B89';
  libelle: string = 'MyTeck';

  hide: boolean = false; 

  Hide() {
    this.hide = !this.hide; 
    console.log('Valeur de hide :', this.hide);
  }

}
