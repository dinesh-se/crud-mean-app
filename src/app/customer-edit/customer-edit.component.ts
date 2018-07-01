import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;
  id:string = '';
  name: object = {
    first: <string> "",
    last: <string> ""
  };
  gender: string = '';
  birthday: string = '';
  lastContact: string = '';
  customerLifetimeValue: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCustomer(this.route.snapshot.params['id']);
    this.customerForm = this.formBuilder.group({
      'name.first' : [null, Validators.required],
      'name.last' : [null, Validators.required],
      'gender' : [null, Validators.required],
      'birthday' : [null, Validators.required],
      'lastContact' : [null, Validators.required],
      'customerLifetimeValue' : [null, Validators.required]
    });
  }

  getCustomer(id) {
    this.api.getCustomer(id).subscribe(data => {
      this.id = data._id;
      this.customerForm.setValue({
        isbn: data.name.first,
        title: data.title,
        description: data.description,
        author: data.author,
        publisher: data.publisher,
        published_year: data.published_year
      });
    });
  }

  // onFormSubmit(form:NgForm) {
  //   this.api.updateCustomer(this.id, form)
  //     .subscribe(res => {
  //         let id = res['_id'];
  //         this.router.navigate(['/customer-details', id]);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

}
