import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormNewComponent } from './form-new/form-new.component';
import { FormExistComponent } from './form-exist/form-exist.component';
import { FormHomeComponent } from './form-home/form-home.component';

const formRoutes: Routes = [
  { path: 'form', component: FormHomeComponent },
  { path: 'form-new', component: FormNewComponent },
  { path: 'form-exist', component: FormExistComponent }
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
