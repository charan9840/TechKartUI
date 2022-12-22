import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Service/product.service';
import { RegisterService } from '../Service/register.service';
import { UpdateService } from '../Service/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form: any;
  submitted = false;
  loading: boolean | undefined;
  id: number = 0;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private updateservice: UpdateService,
    private productservice: ProductService
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.id = this.route.snapshot.params['id']
    console.log(this.id);
    this.getProductData(this.id);
  }
  getProductData(Id: number) {
    this.productservice.getbyId(Id)
      .subscribe({
        next: (product: any) => {
          console.log(product);
          this.setformvalue(product.value)
        },
        error: (error: any) => {
          let err = error.error;
          console.log(err);
          alert(err.message);
        }
      });
  }
  setformvalue(data: any) {
    this.form.get('name').setValue(data.name)
    this.form.get('category').setValue(data.category)
    this.form.get('price').setValue(data.price)
    this.form.get('brand').setValue(data.brand)
    this.form.get('description').setValue(data.description)
  }
  get f() { return this.form.controls; }
  onUpdate() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.updateservice.update(this.form.value, this.id)
      .subscribe({
        next: (details: any) => {
          console.log(details);
          this.router.navigate(['home']);
        },
        error: (error: any) => {
          let err = error.error;
          console.log(err);
          alert(err.message);
          this.loading = false;
        }
      });
  }
}

