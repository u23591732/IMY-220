import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AddProductComponent } from './Components/AddProductComponent.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: HomeComponent },
    { path: 'add-product', component: AddProductComponent }
];
