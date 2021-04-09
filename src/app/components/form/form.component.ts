import { Component, OnInit, Output } from '@angular/core';
import { NgModule } from '@angular/core';   
import {FormsModule} from '@angular/forms'; 
import { Input } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],    
})
export class FormComponent implements OnInit {

  constructor() { }
  
  name = 'World';
  ngOnInit(): void {
  }

}
