import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewSaleComponent } from './new-sale/new-sale.component';
import { SaleProductsComponent } from './sale-products.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NewCartComponent } from './new-sale/new-cart/new-cart.component';  // Import FormsModule
const routes: Routes = [{
  
  path: 'sale-products',
  component: SaleProductsComponent,

  children: [
    { path: 'newsale', component: NewSaleComponent },
    { path: 'newsale/newcart', component: NewCartComponent }, // Add the new route
    
    { path: 'newsale', loadChildren: () => import('./new-sale/new-sale.module').then(m => m.NewSaleModule) },
  ],
},
];

@NgModule({
  declarations: [
    NewSaleComponent,
    // NewCartComponent
  ],
  imports: [
    CommonModule,
    FormsModule , ReactiveFormsModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SaleProductsModule { }
