import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { ButtonsList } from '../buttons-list';


import { HeaderComponent } from '../../shared/components/header/header.component';


@Component({
  selector: 'app-calculator-home',
  templateUrl: './calculator-home.component.html',
  styleUrls: ['./calculator-home.component.scss']
})
export class CalculatorHomeComponent implements OnInit {

  public numA :number;
  public numB :number;
  public result :number;



  cal_add(){
    this.result = this.numA+this.numB;
  }

  cal_sub(){
    this.result = this.numA-this.numB;
  }

  cal_mult(){
    this.result = this.numA*this.numB;
  }

  cal_div(){
    this.result = this.numA/this.numB;
  }

  constructor(public calc_service: CalculatorService) { }


    //list of buttons

    public buttons = new ButtonsList(this).buttons;

    //defines if the calcualator will be reset on next button press
    private reset_on_click: boolean = false;


    addNumber(num:number): void{
      if(this.reset_on_click){
        this.reset();
      }

      if(!this.calc_service.is_reset && num != 0){
        this.calc_service.equation += num;
      }else{
        this.calc_service.equation = num.toString();
        this.calc_service.is_reset = false;
        
      }
      this.calc_service.can_add_operator = true;
      this.reset_on_click = false;

    }

  ngOnInit() {
  }

}
