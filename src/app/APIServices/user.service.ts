import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName = new BehaviorSubject<string>('');
  private Uaddress = new BehaviorSubject<string>('');
  // private selected_cartItems: any[] = [];

  private dataSource = new BehaviorSubject<any[]>([]);
  currentData = this.dataSource.asObservable();

 

  constructor() { }

  setUserName(name: string): void {
    this.userName.next(name);
  }

  getUserName() {
    return this.userName.asObservable();
  }

  setUserAddress(address: string): void {
    this.Uaddress.next(address);
  }

  getUserAddress() {
    return this.Uaddress.asObservable();
  }

   // Getter for selected items
  //  getSelectedItems(): any[] {
  //   return this.selected_cartItems;
  // }

  // Setter for selected items
  setData(data: any[]) {
    this.dataSource.next(data);
  }
}
