import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  contactForm: FormGroup;
  submitted = false;
  showSuccess = false;
  showPopup = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }


    this.showPopup = true;

    // Reset form
    this.contactForm.reset();
    this.submitted = false;
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
