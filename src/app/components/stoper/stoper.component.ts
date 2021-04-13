import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface daty{
  miliseconds:number,
  seconds:number,
  minutes:number,
}

@Component({
  selector: 'app-stoper',
  templateUrl: './stoper.component.html',
  styleUrls: ['./stoper.component.css']
})

export class StoperComponent implements OnInit {

  constructor() { }
startDate :number;
diffDate:daty={miliseconds:0,seconds:0,minutes:0};
tmp_time=0;
times=[];
interval:any;
  ngOnInit(): void {
    let ls=localStorage.getItem('time')
    if(ls)
      this.startStoper(Number(ls))
  }
startStoper(startDate=Date.now()-this.tmp_time):void{
  this.startDate=startDate;
  localStorage.setItem('time',this.startDate.toString())
  this.interval =setInterval(()=>{
    let diff=Date.now()-this.startDate
    this.diffDate.miliseconds=Math.floor(diff)%1000
    this.diffDate.seconds=Math.floor(diff/1000)%60
    this.diffDate.minutes=Math.floor(diff/1000/60)%60
  },10);
}
stopStoper():void{
  localStorage.removeItem('time')
 clearInterval(this.interval)
 this.tmp_time=Date.now()-this.startDate;
 
}
clearStoper():void{
  localStorage.removeItem('time')
  clearInterval(this.interval)
  this.tmp_time=0
  this.startDate=0
  this.times=[]
  this.diffDate={miliseconds:0,seconds:0,minutes:0};
}
addNow(){
this.times.unshift({...this.diffDate})
}



}
