import { Component ,OnInit} from '@angular/core';
import { ProductsService } from '../APIServices/products.service';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
 
  cartItems: any[] = [];
  
  product: any = {}; //for data sharing in the place-order component
  message: string = '';
  constructor(private productService: ProductsService, 
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
      console.log(items)
          //  alert(items.data)
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


increaseQuantity(ProductId: number ,quantity: number) :void{
    this.productService.IncreaseQuantity(ProductId,quantity).subscribe(response => {
      this.message = 'Product quantity increased by 1!';
      console.log(response)
          //  alert(response.data)
           alert(response.data)
    });
  }
  decreaseQuantity(ProductId: number ,quantity: number) :void{
    this.productService.DecreaseQuantity(ProductId,quantity).subscribe(response => {
      this.message = 'Product quantity decreased by 1!';
      console.log(response)
          //  alert(response.data)
           alert(response.data)
    });
  }

 
}
