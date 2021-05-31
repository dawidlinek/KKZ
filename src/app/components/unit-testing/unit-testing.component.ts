import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-testing',
  templateUrl: './unit-testing.component.html',
  styleUrls: ['./unit-testing.component.css']
})
export class UnitTestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  li_array= ['aaa', 'bbbb', 'cccc']
  a: number=0;
  b: number = 0;
  show_h1 = false;
  textarea = 'podaj dane'
  p_upper = ''
  showDiv = false;
  dodaj_liczby(a:number,b:number): any{
    return a + b;
  }
  uwagaTestuje(): boolean{
    this.p_upper = this.textarea.toUpperCase();
    return true;
  };
  random_10(): Array<number> {
    let tab=[]
    for (let i = 0; i <10; i++){
      tab.push(Math.round(Math.random()*10))
    }
    return tab;
  }
  dzielenie(a:number,b:number):number {
    if (b == 0) {
      return null;
    }
    return a/b
  }
  funkcja_liniowa(x: number, a: number, b: number) {
    return a * x + b;
  }
}
