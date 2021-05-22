import { Component, OnInit } from '@angular/core';
interface animals {
  name:string
  waga:string
  opis:string
}
@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  animals: ['kot','pies','foka'];
  animal:animals

  getDetails() {
    fetch(`localhost:8080/zwierzeta?name=${this.animal.name}`).then(resp => {
      resp.json().then(data => {
        this.animal.waga=data.waga
        this.animal.opis=data.opis
      })
    })
  }

}
