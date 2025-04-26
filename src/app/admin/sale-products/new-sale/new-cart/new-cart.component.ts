import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/APIServices/products.service';
import { UserService } from 'src/app/APIServices/user.service';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-new-cart',
  templateUrl: './new-cart.component.html',
  styleUrls: ['./new-cart.component.css']
})
export class NewCartComponent {

  cartItems: any[] = [];

  products: any[] = [];

  product: any = {}; //for data sharing in the place-order component
  message: string = '';
  constructor(private productService: ProductsService, private userService: UserService,
    private sharedService: SharedService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadCartItems();

}

  loadCartItems(): void {
    this.productService.getCartItems().subscribe(items => {
      this.cartItems = items;
      console.log("cart items"+items)
    });
  }
 
  removeProduct(productId: number): void {
    this.productService.removeProduct(productId).subscribe(
      () => {
        this.cartItems = this.cartItems.filter(item => item.id !== productId);
      },
      (error) => {
        console.error('Error removing product:', error);
      }
    );
  }


  buyNow(product: any): void {
    this.sharedService.setProduct(product);
    this.router.navigate(['/place-order']);
  }


// increaseQuantity(ProductId: number ,quantity: number) :void{
//     this.productService.IncreaseQuantity(ProductId,quantity).subscribe(response => {
//       this.message = 'Product quantity increased by 1!';
//       console.log(response)
//           //  alert(response.data)
//            alert(response.data)
//     });
//   }
increaseQuantity(id: number, amount: number) {
  const products = this.cartItems.find(p => p.id === id);
  if (products) {
    products.quantity += amount;
    products.totalPrice = products.price * products.quantity;
  }
}
  // decreaseQuantity(ProductId: number ,quantity: number) :void{
  //   this.productService.DecreaseQuantity(ProductId,quantity).subscribe(response => {
  //     this.message = 'Product quantity decreased by 1!';
  //     console.log(response)
  //         //  alert(response.data)
  //          alert(response.data)
  //   });
  // }
  decreaseQuantity(id: number, amount: number) {
    const products = this.cartItems.find(p => p.id === id);
    if (products && products.quantity > 1) {
      products.quantity -= amount;
      products.totalPrice = products.price * products.quantity;
    }
  }


  getTruncatedName(name: string): string {
    if (name.length > 15) {
      return name.substring(0, 10) + '...';
    }
    return name;
  }

  selectedItems = new Set<number>(); // To track selected item IDs

  toggleSelection(item: any) {
    if (this.selectedItems.has(item.id)) {
      this.selectedItems.delete(item.id);
    } else {
      this.selectedItems.add(item.id);
    }
    this.updateSelectedItemsData();
  }

  updateSelectedItemsData() {
    const selectedData = this.cartItems
      .filter(item => this.selectedItems.has(item.id))
      .map(item => ({ name: item.name, quantity: item.quantity }));
    this.userService.setData(selectedData);
  }


}


