import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../APIServices/products.service';
import { AuthService } from '../APIServices/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private productService: ProductsService, private router: Router,private authService:AuthService) { }
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  
  
}
