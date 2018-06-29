import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';

const appRoutes: Routes = [
  {
    path: 'customers',
    component: CustomerComponent,
    data: { title: 'Customers List' }
  },
  // {
  //   path: 'book-details/:id',
  //   component: BookDetailComponent,
  //   data: { title: 'Book Details' }
  // },
  // {
  //   path: 'book-create',
  //   component: BookCreateComponent,
  //   data: { title: 'Create Book' }
  // },
  // {
  //   path: 'book-edit/:id',
  //   component: BookEditComponent,
  //   data: { title: 'Edit Book' }
  // },
  { path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
