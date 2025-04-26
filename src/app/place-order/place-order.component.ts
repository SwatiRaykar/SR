import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../APIServices/products.service';
import { SharedService } from '../shared.service';
import { UserService } from '../APIServices/user.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  product: any;
  message: string = '';
  Uaddress: string = '';
  userName: string = '';

  constructor(private sharedService: SharedService, private ProductService: ProductsService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.product = this.sharedService.getProduct();
    this.userService.getUserName().subscribe(name => {
      this.userName = name;
    });
    this.userService.getUserAddress().subscribe(address => {
      this.Uaddress = address;
    });
  }
  // PlaceOrder(name:string,quantity:number,totalPrice:number) :void{
  //   this.productService.addToCart(ProductId,quantity).subscribe(response => {
  //     this.message = 'Product added to cart successfully!';
  //     console.log(response)
  //         //  alert(response.data)
  //          alert(response.data)
  //   });
  // }

}
