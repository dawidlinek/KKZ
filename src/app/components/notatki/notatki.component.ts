import { JsonPipe } from '@angular/common';
import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
interface notatka{
  id?: number;
  tytul: string;
  tresc: string;
  priorytet: string;
  edit?: boolean;
}
@Component({
  selector: 'app-notatki',
  templateUrl: './notatki.component.html',
  styleUrls: ['./notatki.component.css']
})
export class NotatkiComponent implements OnInit {

  constructor() { }
  notatka: notatka = {tytul: '', tresc: '', priorytet: 'niski'};
  notatki: Array<notatka>;
  ngOnInit(): void {
    this.getNotatki();
  }
  getNotatki(): void{
    fetch('http://localhost:8080/notatki').then(resp => resp.json()).then(data => {
      this.notatki=data
    })
  }
  dodajNotatke(): void {
    fetch('http://localhost:8080/notatki/dodaj?notatka='+JSON.stringify(this.notatka)).then(()=>{this.getNotatki()})
  }
  updateNotatke(notatka:notatka): void {
    fetch('http://localhost:8080/notatki/update?notatka='+JSON.stringify(notatka)).then(()=>{this.getNotatki()})
  }
  usunNotatke(id:number): void {
 fetch('http://localhost:8080/notatki/usun?id='+id).then(()=>this.getNotatki())
  }
}
