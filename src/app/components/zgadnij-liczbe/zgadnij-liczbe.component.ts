import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zgadnij-liczbe',
  templateUrl: './zgadnij-liczbe.component.html',
  styleUrls: ['./zgadnij-liczbe.component.css']
})
export class ZgadnijLiczbeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  a1=-1;
  a2=-1;
  min=0;
  max=100;
  getRandomValue():void{
    this.a1=Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.a2=this.min
    console.log(this.a1)
  }
}
