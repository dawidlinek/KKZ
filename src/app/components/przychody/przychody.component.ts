import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
interface transakcja {
  wartosc: number;
  opis: string;
  edit: boolean
}
interface budzet {
  przychody: Array<transakcja>;
  wydatki: Array<transakcja>;
}
@Component({
  selector: 'app-przychody',
  templateUrl: './przychody.component.html',
  styleUrls: ['./przychody.component.css']
})
export class PrzychodyComponent implements OnInit {

  constructor() { }
  wartosc: number;
  opis: string;
  budzet: budzet = { przychody: [], wydatki: [] };
  get calosc(){
    let a=0;
    this.budzet.przychody.map(e=>a+=e.wartosc)
    this.budzet.wydatki.map(e=>a+=e.wartosc)
    return a;
  }
  ngOnInit(): void {
  }
  dodaj() {
    if (this.wartosc > 0) {
      this.budzet.przychody.push({ wartosc: this.wartosc, opis: this.opis, edit: false });
    } else {
      this.budzet.wydatki.push({ wartosc: this.wartosc, opis: this.opis, edit: false });
    }
  }
}
