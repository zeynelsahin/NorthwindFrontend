import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CartService} from "../../services/cart.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products: Product[] = [];
  filterText="";

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,private toastrService:ToastrService,private cartService:CartService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      } else {
        this.getProducts();
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
    })
  }

  getProductsByCategory(categoryId: number) {
    this.productService.getProductByCategory(categoryId).subscribe((response) => {
      this.products = response.data;
    })
  }

  addToCart(product:Product){
    this.toastrService.success("Sepete Eklendi",product.productName);
    this.cartService.addToCart(product);
  }

}
