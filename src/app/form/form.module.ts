import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { FormHomeComponent } from './form-home/form-home.component';
import { FormNewComponent } from './form-new/form-new.component';
import { FormExistComponent } from './form-exist/form-exist.component';

import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FormHomeComponent,
    FormNewComponent, 
    FormExistComponent, 
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FormRoutingModule
  ]
})
export class FormModule { }
