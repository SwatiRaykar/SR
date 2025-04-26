import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewSaleComponent } from './new-sale.component';
import { NewCartComponent } from './new-cart/new-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  
  path: 'newsale',
  component:NewSaleComponent,

  children: [
    { path: 'newcart', component: NewCartComponent },
    { path: 'newsale/newcart', component: NewCartComponent }, // Add the new route
  ],
},
];


@NgModule({
  declarations: [
    NewCartComponent
  ],
  imports: [
    CommonModule,
    FormsModule , ReactiveFormsModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NewSaleModule { }
