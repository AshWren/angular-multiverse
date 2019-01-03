import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { MealHomeComponent } from './meal/meal-home/meal-home.component';
import { MemeHomeComponent } from './meme/meme-home/meme-home.component';
import { BudgetHomeComponent } from './budget/budget-home/budget-home.component';
import { CalculatorHomeComponent } from './calculator/calculator-home/calculator-home.component';


import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormModule } from './form/form.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MealHomeComponent,
    MemeHomeComponent,
    BudgetHomeComponent,
    CalculatorHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
