import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { FormNewComponent } from './form-new/form-new.component';
import { FormExistComponent } from './form-exist/form-exist.component';
import { FormHomeComponent } from './form-home/form-home.component';

const formRoutes: Routes = [
  { 
    path: 'form', 
    component: FormComponent,
    children: [
      {
        path: '',
        component: FormHomeComponent
      },
       
          {
            path: 'new',
            component: FormNewComponent,
          }, 
          {
            path: 'exist',
            component: FormExistComponent,
          }
        
      
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      formRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class FormRoutingModule { }
