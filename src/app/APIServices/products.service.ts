import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://localhost:44323/api/Product'; 
  
  constructor(private http: HttpClient) { }

getProducts(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/GetAllProducts`);
  }
  getOrders(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/GetAllOrders`);
  }
addToCart(ProductId: number,quantity: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddToCart`, { ProductId,quantity });
  }
  Place(ProductId: number,quantity: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddToCart`, { ProductId,quantity });
  }
  getCartItems(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/GetCartItems`);
  }
  getCartItems_categorywise(categoryName: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/GetCartItems_categoryWise/${categoryName}`);
  }

  removeProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove/${productId}`);
  }
  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DeleteProduct/${productId}`);
  }
  deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DeleteCategory/${categoryId}`);
  }
  getCategoryList(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/GetCategoryList`);
  }
  addProduct(userObj:any){
    return this.http.post<any>(`${this.apiUrl}/AddProduct`,userObj)
    
}
addCategory(userObj:any){
  return this.http.post<any>(`${this.apiUrl}/AddCategory`,userObj)
  
}
IncreaseQuantity(ProductId: number,quantity: number): Observable<any> {
  return this.http.post(`${this.apiUrl}/IncreaseProductQuantity`, { ProductId,quantity });
}
DecreaseQuantity(ProductId: number,quantity: number): Observable<any> {
  return this.http.post(`${this.apiUrl}/DecreaseProductQuantity`, { ProductId,quantity });
}
placeOrder(productId: number): Observable<any> {
  return this.http.post<any>(this.apiUrl, { productId });
}
}
