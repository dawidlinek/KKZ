import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor( private _activatedRoute: ActivatedRoute,private _router: Router,) { }
params 
cars 
mark
  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.params=params
      this.getData()
    })
  }
  getData(){
    fetch(`https://private-anon-397b96ac4c-carsapi1.apiary-mock.com/cars`).then(resp=>{
      resp.json().then(json=>{
        this.cars=json.filter(e=>e.make==this.params.mark);
      })
    })
    fetch(`https://private-anon-397b96ac4c-carsapi1.apiary-mock.com/manufacturers`).then(resp=>{
      resp.json().then(json=>{
        // console.log(json.filter(e=>e.name==this.params.mark))
        this.mark=json.filter(e=>e.name==this.params.mark)[0];
      })
    })
  }

}
