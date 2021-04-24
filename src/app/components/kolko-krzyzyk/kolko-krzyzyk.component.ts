import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kolko-krzyzyk',
  templateUrl: './kolko-krzyzyk.component.html',
  styleUrls: ['./kolko-krzyzyk.component.css']
})
export class KolkoKrzyzykComponent implements OnInit {

  constructor() { }


  state: Array<number> = [];

  winStates = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]];

  ngOnInit(): void {
    this.reset()
  }
  runda: number = 0
  text = 'Wygrałeś'
  reset() {
    this.runda = 1
    this.state = []
    for (let i = 0; i < 9; i++) {
      this.state.push(0)
    }
  }
  change(idx: number): void {
    if (this.state[idx] != 0 || this.runda == 0)
      return

    this.state[idx] = this.runda
    this.winStates.forEach(e => {
      if ((this.state[e[0]] == this.state[e[1]]) && this.state[e[1]] == this.state[e[2]] && this.state[e[2]] != 0) {
        this.runda = 0
        this.text = this.state[e[0]] == -1 ? 'X' : "O" + ' wygrał tą rundę'
      }
    })
    if (this.state.filter(e => e == 0).length == 0 && this.runda != 0) { this.text = 'Tym razem remis'; this.runda = 0 }
    if (this.runda == 0) return

    this.runda = this.runda == -1 ? 1 : -1
  }


}
