import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomocnik-matematyczny-main',
  templateUrl: './pomocnik-matematyczny-main.component.html',
  styleUrls: ['./pomocnik-matematyczny-main.component.css']
})
export class PomocnikMatematycznyMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dzialania=true
  wynik=0;
  a=0;
  b=0;
  calculate(w){
    this.wynik=w
  }
  pow(){
    this.wynik=Math.pow(this.a,this.b);
  }

}
