import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  counter: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  increment(i: number): void {
    this.counter = i
  }

}
