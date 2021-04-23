import { Component, OnInit } from '@angular/core';
interface z{
  lowisko:number,
  data:string,
  sedzia:string,
}
@Component({
  selector: 'app-zawody-wedkarskie',
  templateUrl: './zawody-wedkarskie.component.html',
  styleUrls: ['./zawody-wedkarskie.component.css']
})
export class ZawodyWedkarskieComponent implements OnInit {

  constructor() { }

  lowisko:number;
  data:string;
  sedzia:string;
  darkmode=false;
  zawody:Array<z>=[];

  ngOnInit(): void {
  }
  wyczysc():void{
    this.lowisko=0
    this.data=''
    this.sedzia=''
  }
  dodaj():void{
    this.zawody.push({
      lowisko: this.lowisko,
      data:this.data,
      sedzia:this.sedzia,
    })
    this.wyczysc()

  }
  usun(id){
    this.zawody.splice(id,1)
  }

}
