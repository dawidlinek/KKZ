import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-api',
  templateUrl: './map-api.component.html',
  styleUrls: ['./map-api.component.css']
})
export class MapApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  adress :String=''; 
  locations :any;
  autocomplete(){
    // this.adress="AAAAAA";
    fetch(`https://api.locationiq.com/v1/autocomplete.php?key=pk.8d1eacb8a0058060e3edb9f66e57141d&q=${this.adress}&limit=5`).then(resp=>{
      resp.json().then(json=>{
        this.locations=json;
      })
    })
  }

}
