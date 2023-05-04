import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [];

  onAddProduct(productData: {
    productName: string;
    productDescription: string;
    productQuantity: number;
    productCost: number;
  }) {
    this.products.push(productData);
  }
}
