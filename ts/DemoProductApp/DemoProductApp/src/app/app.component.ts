import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoProductApp';

  
  isAddingProduct: boolean = false;
isProductListing: boolean = true; 

showProductListing() {
  this.isProductListing = true;
  this.isAddingProduct = false;
}

showAddProductForm() {
  this.isProductListing = false;
  this.isAddingProduct = true;
  
  console.log("isAddingProduct:", this.isAddingProduct);
}
}


