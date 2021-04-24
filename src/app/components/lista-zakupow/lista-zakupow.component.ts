import { Component, OnInit } from '@angular/core';
interface produkt{
  nazwa:string,
  ilosc:string,
}
@Component({
  selector: 'app-lista-zakupow',
  templateUrl: './lista-zakupow.component.html',
  styleUrls: ['./lista-zakupow.component.css']
})
export class ListaZakupowComponent implements OnInit {

  constructor() { }
lista:Array<produkt>=[];
  ngOnInit(): void {
  }
nazwa:string
ilosc:string
  dodaj():void{
this.lista.push({nazwa:this.nazwa,ilosc:this.ilosc});
  }
  usun(id:number):void{
this.lista.splice(id,1);
  }

}
