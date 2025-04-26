import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/APIServices/products.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories: any[] = [];

  constructor(private productService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategoryList();
  }
  loadCategoryList(): void {
    this.productService.getCategoryList().subscribe(items => {
      this.categories = items;
      console.log(items)
          //  alert(items.data)
    });
  }

  deleteCategory(productId: number): void {
    this.productService.deleteCategory(productId).subscribe(
      () => {
        this.categories = this.categories.filter(item => item.id !== productId);
      },
      (error) => {
        console.error('Error removing product:', error);
      }
    );
  }

  navigateToCategory(): void {
    this.router.navigate(['admin/category']).then(() => {
      this.productService.getOrders().subscribe(); // Ensures the cart items are fetched when navigated to
    });
  }

}
