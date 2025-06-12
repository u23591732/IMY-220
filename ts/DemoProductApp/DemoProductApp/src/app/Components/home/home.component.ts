import { Component, OnInit } from '@angular/core';
import { MydataService } from '../../Services/mydata.service';
import { Product } from '../../models/Product.Model';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-home',
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  isEditing: boolean = false;
  editableProduct: Product | null = null;
  newProduct: Product = { name: '', description: '', price: 0, id: 0 }; 
  isAddingProduct: boolean = false;
  isProductListing: boolean = true;

  constructor(private myDataService: MydataService,private cdr: ChangeDetectorRef) {}



  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.myDataService.getData().subscribe({
      next: (products) => {
        this.products = products;
        console.log(products);
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  editProduct(product: Product): void {
    
    this.editableProduct = { ...product };
    this.isEditing = true;
  }

  cancelEdit(): void {
    
    this.isEditing = false;
    this.editableProduct = null;
  }

  saveProduct(): void {
   
    if (this.editableProduct) {
      this.myDataService.updateProduct(this.editableProduct.id ?? 0,this.editableProduct).subscribe({
        next: () => {
          console.log('Product updated successfully!');
          this.loadProducts(); 
          this.isEditing = false; 
          this.editableProduct = null; 
        },
        error: (err) => {
          console.error('Error saving product:', err);
          alert('Failed to update product!');
        }
      });
    }
  }
  deleteProduct(product: Product): void {
    if (confirm(`Are you sure you want to delete ${product.name}?`)) {
      this.myDataService.deleteProduct(product.id ?? 0 ).subscribe({
        next: () => {
          console.log('Product deleted successfully!');
          this.products = this.products.filter(p => p.id !== product.id); 
        },
        error: (err) => {
          console.error('Error deleting product:', err);
          alert('Failed to delete product!');
        }
      });
    }
  }
  


  startAddProduct() {
    this.isAddingProduct = true;
  }

  
  cancelAdd() {
    this.isAddingProduct = false;
    this.newProduct = { name: '', description: '', price: 0, id: 0 }; 
  }

 
  addProduct() {
    if (!this.newProduct.name || !this.newProduct.description || !this.newProduct.price) {
      alert('Please fill in all fields!');
      return;
    }
  
    
    this.newProduct.id = Math.floor(Math.random() * 1000) + 17;
  
    this.myDataService.addProduct(this.newProduct).subscribe({
      next: (product: Product) => {
        console.log('Product added successfully!');
        this.products.push(product); 
        this.isAddingProduct = false; 
        this.newProduct = { name: '', description: '', price: 0, id: 0 }; 
      },
      error: (err) => {
        console.error('Error adding product:', err);
        alert('Failed to add product!');
      }
    });
  }

  showProductListing() {
    this.isProductListing = true;
    this.isAddingProduct = false;
  }
  
  showAddProductForm() {
    this.isAddingProduct = true;
    this.isProductListing = false;
    this.cdr.detectChanges();  
  }

}

