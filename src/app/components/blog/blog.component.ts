import { Component, OnInit } from '@angular/core';
interface Posts{
  title:string,
  content:string,
  date:Date
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SelectedYear
  SelectedMonth
  displayedPost
  post={title:'',content:'',date:new Date()}
  get avalibleYears(){
    return new Set(this.allPosts.map(x=>x.date.getFullYear()))
  }
  get avalibleMonths(){
    return new Set(this.allPosts.filter(x=>x.date.getFullYear()==this.SelectedYear).map(x=>x.date.toLocaleString('default', { month: 'long' })))
  }
  get selectedPosts(){
    if(this.SelectedYear && this.SelectedMonth){
      return this.allPosts.filter(x=>x.date.toLocaleString('default', { month: 'long' })==this.SelectedMonth&&x.date.getFullYear()==this.SelectedYear)
    }
    return []
  }
  savePost(){
    // this.post.date=new Date(this.post.date)
    this.allPosts.push({title:this.post.title,content:this.post.content,date:new Date(this.post.date)})
    console.log( this.allPosts)
  }


  allPosts:Array<Posts>=[{title:"Tytul",content:"opis",date:new Date()}];

}
