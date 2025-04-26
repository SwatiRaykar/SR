import { Component, Input } from '@angular/core';
import { FormGroup,Validators,FormBuilder, FormControl, } from '@angular/forms';
import {Router } from '@angular/router';
import { AuthService } from 'src/app/APIServices/auth.service';
import { ProductsService } from 'src/app/APIServices/products.service';
import { UserService } from 'src/app/APIServices/user.service';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css']
})
export class NewSaleComponent {
  selectedItems: Set<number> = new Set();//to track id's
  selectedItemsArray: any[] = []; // Array to store selected item objects
  categories: any[] = [];
  cartItems: any[] = [];
  totalBill: number = 0;//to store the total bill
  discountPercentage: number = 0; // Property to hold the discount percentage
  discountedTotalBill: number = 0; 
  selectedOption: string="";

  options = [
    { value: 'Mesacold', label: 'Mesacold' },
    { value: 'Glycomet(500 mg)', label: 'Glycomet(500 mg)' },
    { value: 'Nizer', label: 'Nizer' }
  ];
  options1 = [
    { value: '10', label: '10%' },
    { value: '20', label: '20%' },
    { value: '30', label: '30%' }
  ];


  billingForm!:FormGroup;//declare formgroup
  constructor(private fb:FormBuilder,private auth:AuthService,
    private router: Router, private userService: UserService
    ,private productService: ProductsService){} //inject form builder
   
  ngOnInit():void{
    this.billingForm=this.fb.group({
      InvoiceDiscount:['',Validators.required],
      TotalDiscount:['',Validators.required],
      TotalVAT:['',Validators.required],
      GrandTotal:['',Validators.required],
      Previous:['',Validators.required],
      Change:['',Validators.required]
    })

    this.loadCategoryNames();

   
  }
 
  loadCategoryNames(): void {
    this.productService.getCategoryList().subscribe(items => {
      this.categories = items;
      console.log(" Category Names:"+items)
          //  alert(items.data)
    });
  }
 
  
  loadCartItemsForCategory(category: string): void {
    this.productService.getCartItems_categorywise(category).subscribe(
      (data: any[]) => {
        this.cartItems = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  toggleSelection(item: any) {
    if (this.selectedItems.has(item.id)) {
      this.selectedItems.delete(item.id);
    } else {
      this.selectedItems.add(item.id);
    }
    console.log("selectedItems"+this.selectedItems)
    this.updateSelectedItemsData();
  }

  updateSelectedItemsData() {
    this.selectedItemsArray = this.cartItems
      .filter(item => this.selectedItems.has(item.id))
      .map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        totalbill: item.price * item.quantity
      }));
      console.log("selectedItemsArray"+this.selectedItemsArray)
      this.calculateTotalBill();
    // this.userService.setData(this.selectedItemsArray);
  }
  calculateTotalBill(): void {
    this.totalBill = this.selectedItemsArray.reduce((sum, item) => sum + item.totalbill, 0);
    console.log("Total Bill:", this.totalBill);
    this.applyDiscount();
  }
  applyDiscount(): void {
    this.discountedTotalBill = this.totalBill - (this.totalBill * this.discountPercentage / 100);
    console.log("Discounted Total Bill:", this.discountedTotalBill);
  }
  onDiscountChange(event: any): void {
    this.discountPercentage = +event.target.value; // Convert to number
    this.applyDiscount(); // Recalculate the discounted total
  }

  increaseQuantity(id: number, amount: number) {
    const products = this.cartItems.find(p => p.id === id);
    if (products) {
      products.quantity += amount;
      products.totalPrice = products.price * products.quantity;
      this.updateSelectedItemsData();
    }
  }
  decreaseQuantity(id: number, amount: number) {
    const products = this.cartItems.find(p => p.id === id);
    if (products && products.quantity > 1) {
      products.quantity -= amount;
      products.totalPrice = products.price * products.quantity;
      this.updateSelectedItemsData();
    }
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

  getTruncatedName(name: string): string {
    if (name.length > 15) {
      return name.substring(0, 10) + '...';
    }
    return name;
  }
 
  onCalculate() {
    if (this.billingForm.valid) {
      console.log(this.billingForm.value);
      // Include selectedItemsArray in the submission if necessary
      this.auth.signUp({
        ...this.billingForm.value,
        items: this.selectedItemsArray
      }).subscribe({
        next: (res => {  
          console.log(res);
          alert(res.data);
          this.billingForm.reset();
        }),
        error: (err => {
          alert(err?.error.message);
        })
      });
    } else {
      console.log('Form is not valid');
      ValidateForm.validateAllFormFields(this.billingForm);
      alert('Invalid Signup Form');
    }
  }

}
