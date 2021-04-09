import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loops-ifs',
  templateUrl: './loops-ifs.component.html',
  styleUrls: ['./loops-ifs.component.css']
})
export class LoopsIfsComponent implements OnInit {

  constructor() { }
  arr=['a','b','c'];
  customStyle=['color:red'];
  ngOnInit(): void {
  }
  addNew(){
    let tmp=document.querySelector('input').value;
    this.arr.push(tmp);
  }
  remove(i){
   this.arr.splice(i,1);
  }

}
