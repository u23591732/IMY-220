import { Component } from '@angular/core';
import { MydataService } from '.././Services/mydata.service';
import { Product } from '.././models/Product.Model';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  imports :[FormsModule,RouterModule ]
  
})
export class AddProductComponent {
  newProduct: Product = { name: '', description: '', price: 0 };

  constructor(private myDataService: MydataService) {}

  addProduct() {
    if (!this.newProduct.name || !this.newProduct.description || !this.newProduct.price) {
      alert('Please fill in all fields!');
      return;
    }

    

    this.myDataService.addProduct(this.newProduct).subscribe({
      next: (product: Product) => {
        console.log('Product added successfully!');
        alert('Product added!');
        this.newProduct = { name: '', description: '', price: 0 }; // Reset form
      },
      error: (err) => {
        console.error('Error adding product:', err);
        alert('Failed to add product!');
      }
    });
  }
}
