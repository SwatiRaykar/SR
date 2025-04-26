import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component'; //  the new component is Imported.
import { OrdersComponent } from './orders/orders.component';
import { authGuard } from '../auth/auth.guard';
import { SaleProductsComponent } from './sale-products/sale-products.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';


const routes: Routes = [{
  
  path: 'portfollio',
  component: AdminComponent,
  canActivate: [authGuard],
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'blogs', component: SaleProductsComponent },
    { path: 'contact-me', component: ProductsComponent },
    { path: 'products/add-Product', component: AddProductComponent }, // Add the new route
    { path: 'about-me', component: CustomersComponent },
    { path: 'swati-raykar-resume', component: CategoryComponent },
    { path: 'products/category-list', component: CategoryListComponent }, // Add the new route
    { path: 'projects', component: OrdersComponent },
    // { path: 'sale-products/newsale', component: AddProductComponent }, // Add the new route
    { path: 'sale-products', loadChildren: () => import('./sale-products/sale-products.module').then(m => m.SaleProductsModule) },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
