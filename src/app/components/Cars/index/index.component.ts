import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getData()
  }
  marks=[];
  getData(){
    fetch('https://private-anon-397b96ac4c-carsapi1.apiary-mock.com/manufacturers').then(resp=>{
      resp.json().then(json=>{
this.marks=json
      })
    })
  }

}
