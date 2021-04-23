import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hornera',
  templateUrl: './hornera.component.html',
  styleUrls: ['./hornera.component.css']
})
export class HorneraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
a1='';
a2=1;
w=0;
calculate(){
  this.w=0
  for(let i=0;i<this.a1.length;i++){
  this.w=this.w*this.a2+Number(this.a1[i]);
  }
}

}
