import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wisielec',
  templateUrl: './wisielec.component.html',
  styleUrls: ['./wisielec.component.css']
})
export class WisielecComponent implements OnInit {

  constructor() { }
znaki=[];
words=['Ala',"ma",'kota','sprzatando'];
wybrany='';
wybrane=[];
win=false;
bgColor='white'
proby=5;
ngOnInit(): void {
  this.los()
}
los(){
  this.znaki=[]
  this.bgColor='white'
  this.proby=5
    this.win=false
    let word=this.words[Math.floor(Math.random() * this.words.length)];
    this.wybrane=[]
    for(let i=0;i<word.length;i++){
      this.znaki.push({org:word[i],guessed:false});
    }

  }
  check():void{
    this.znaki.map(a=>a.org==this.wybrany?a.guessed=true:null);
    if((this.znaki.filter(a=>a.org==this.wybrany).length)==0){
      this.wybrane.push(this.wybrany)
      this.proby--
    }
    
    this.wybrany=''
    if(this.znaki.filter(a=>!a.guessed).length==0){
      this.win=true;
      this.bgColor='green'
    }else if(this.proby==0){
      this.bgColor='red';
      this.win=true;
    }
  }


}
