import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor( private _activatedRoute: ActivatedRoute,private _router: Router,) { }
  params 
  car
    ngOnInit(): void {
      this._activatedRoute.params.subscribe(params => {
        this.params=params
        this.getData()
      })
    }
    getData(){
      fetch(`https://private-anon-397b96ac4c-carsapi1.apiary-mock.com/cars`).then(resp=>{
        resp.json().then(json=>{
          this.car=json.filter(e=>e.id==this.params.model)[0];
          console.log(this.car)
        })
      })
    
    }

}
