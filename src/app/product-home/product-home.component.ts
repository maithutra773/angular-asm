import { Component, OnInit } from '@angular/core';
import { TypeProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'home-product',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  validForm = false;
  detail: TypeProduct;
  products: TypeProduct[];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
    this.products = data;
    })
  }
}
