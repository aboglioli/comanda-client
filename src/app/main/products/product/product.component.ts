import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product, Subproduct } from '../../../models';
import { ProductService } from '../../../shared/services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  form: FormGroup;
  price: number;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const productId = params['productId'];

      if(productId) {
        this.productService.getById(productId)
          .subscribe((product: Product) => {
            this.product = product;
            this.buildForm(this.product);
          });
      } else {
        this.product = {
          name: 'Nuevo',
          description: 'Nuevooo',
          type: '',
          price: {
            value: 0,
            quantity: {
              value: 0,
              unit: ''
            }
          },
          subproducts: []
        }
        this.buildForm(this.product);
      }
    });
  }

  onChangeSubproducts(subproducts: Subproduct[]) {
    this.product.subproducts = subproducts;
    this.calculatePrice(this.product.subproducts);

    // console.log(this.product);
  }

  onSave() {
    if(this.form.valid) {
      this.product.name = this.form.value.name;
      this.product.description = this.form.value.description;
      this.product.type = this.form.value.type;

      this.product.subproducts = this.product.subproducts.map(subproduct => {
        return subproduct.product._id;
      });

      console.log(this.product);
    }

  }

  private calculatePrice(subproducts: Subproduct[]) {
    const subproductsWithId = subproducts.map(subproduct => {
      return {
        quantity: subproduct.quantity,
        product: typeof subproduct.product === 'string' ? subproduct.product : subproduct.product._id
      };
    });

    this.productService.calculatePrice(subproductsWithId)
      .subscribe(({price}: {price: number}) => {
        this.price = price;
      });
  }

  private buildForm(product: Product) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      type: ['', Validators.required]
    });
  }

}
