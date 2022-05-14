import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ToastrService} from "ngx-toastr";
import {reduce} from "rxjs";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group(
      {
        productName: ["", Validators.required],
        unitPrice: ["", Validators.required],
        unitsInStock: ["", Validators.required],
        categoryId: ["", Validators.required]

      }
    )
  }

  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value)
      this.productService.add(productModel).subscribe(response => {
        console.log(response)
        this.toastrService.success(response.messages, "Başarılı");
      }, responseError => {
       if(responseError.error.Errors.length>0){
         console.log(responseError.error.Errors)
         for (let i = 0; i < responseError.error.Errors.length; i++) {
           this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
         }
       }
      });

    } else {
      this.toastrService.error("Formunuz Eksik", "Dikkat");
    }
  }
}
