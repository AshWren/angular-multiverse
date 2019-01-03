import { Injectable } from '@angular/core';
import { attachEmbeddedView } from '@angular/core/src/view';



interface ResultsList {
  id: number;
  value: number;
  equation: string;
}

@Injectable({
  providedIn: 'root'
})



export class CalculatorService {

  // calculator equation to be solved/value of display section
  public equation: string = '0';

  // last solved result
  public result: number = null;

  public is_reset: boolean = true;
  
  public can_add_operator: boolean = false;

  // list of ids for result list
  public result_list_ids: number[] = [0];
  
  public result_list: ResultsList[] = [];

  // adds record to the result list
  // @param value - numeric value to be added 
  // @param equation - the equation string used to calculate result

  public addToResultList(value: number, equation: string): void {
    let id = this.result_list_ids[this.result_list_ids.length -1] +1;
    this.result_list_ids.push(id);
    this.result_list.unshift({
      id: id,
      value: value,
      equation: equation
    });
  }
  constructor() { }
}
