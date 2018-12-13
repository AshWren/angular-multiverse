import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BudgetHomeComponent } from './budget/budget-home/budget-home.component';
import { CalculatorHomeComponent } from './calculator/calculator-home/calculator-home.component';
import { MealHomeComponent } from './meal/meal-home/meal-home.component';
import { MemeHomeComponent } from './meme/meme-home/meme-home.component';




const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'budget', component: BudgetHomeComponent },
  { path: 'calculator', component: CalculatorHomeComponent },
  { path: 'meal', component: MealHomeComponent },
  { path: 'meme', component: MemeHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
