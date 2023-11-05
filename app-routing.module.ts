import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'invoiceModule', loadChildren: () => import('./features/invoice/invoice.module').then(m => m.InvoiceModule) },
  { path: 'fournisseurModule', loadChildren: () => import('./features/fournisseur/fournisseur.module').then(m => m.FournisseurModule) },
  { path: 'productModule', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule) },
  { path: 'userModule', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
