import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-zwierzeta',
  templateUrl: './zwierzeta.component.html',
  styleUrls: ['./zwierzeta.component.css']
})
export class ZwierzetaComponent implements OnInit {
  zwierzetaForm: FormGroup
zwierzeta=[]
  constructor(private router: Router) {
    this.zwierzetaForm = new FormGroup({
       imie: new FormControl('',[ Validators.required,
         Validators.minLength(2),Validators.maxLength(10)]),
       gatunek: new FormControl('',[ Validators.required]),
       data: new FormControl('',[ Validators.required]),
       waga: new FormControl('',[Validators.min(0),Validators.max(1000)]),
    });

  }
  dodaj = false;
  ngOnInit(): void {
    this.getZwierzeta()
  }
    getZwierzeta(): void{
    fetch('http://localhost:8080/zwierzeta/get').then(resp => resp.json()).then(data => {
      this.zwierzeta = data

    })
  }
  data(data): string {
    return new Date(data).toLocaleDateString();
  }
  dodajZwierze() {
    // console.log(this.zwierzetaForm.value)
        fetch('http://localhost:8080/zwierzeta/dodaj?zwierzeta='+JSON.stringify(this.zwierzetaForm.value)).then(()=>{this.getZwierzeta()})

  }
}
