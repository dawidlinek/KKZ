import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  path='';
  idx=0;
  bgStyle={'background':'#F0F0F0','color':'#222222'};
  paths=['/assets/images/img1.jpg','/assets/images/img2.jpg'];
  ngOnInit(): void {
    this.path=this.paths[0];
  }
  change(i){
    this.idx+=i;
    if(this.idx>this.paths.length-2){
    fetch('https://picsum.photos/1000/600').then(resp=>{
      this.paths.push(resp.url)
    })
  }
  if(this.idx<0)
  this.idx=this.paths.length-2
  this.path=this.paths[this.idx]
  }
  checkbox_event(){
    if(document.querySelector('input').checked){
      this.bgStyle.background="#222222";
      this.bgStyle.color="#F0F0F0";
    }else{
      this.bgStyle.color="#222222";
      this.bgStyle.background="#F0F0F0";
    }
    
  }

}
