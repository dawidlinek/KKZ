import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  constructor() { }
tasks={
  new:[],
  in_progress:[] as string[],
  finished:[] as string[],
  deleted:[] as string[]
}
  ngOnInit(): void {
    let data=localStorage.getItem('data')
    console.log(data)
    if(data)
    this.tasks=JSON.parse(data)
  }
 
  AddNew(){
this.tasks.new.push(document.querySelector('input').value)
localStorage.setItem('data',JSON.stringify(this.tasks))
}
move(from,to,id){
  this.tasks[to].push(this.tasks[from].splice(id,1));
  localStorage.setItem('data',JSON.stringify(this.tasks))
  }
}
