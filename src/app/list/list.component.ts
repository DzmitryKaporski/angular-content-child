import { Component, ContentChild, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private n: number = 0
  private s: number = 0

  @ContentChild(ItemComponent)
  private item!: ItemComponent

  @ContentChild('selected')
  private selected!: ItemComponent

  constructor() { }

  ngOnInit(): void {
  }

  count(): void {
    this.item.increment(++this.n)
  }

  countCustom(): void {
    this.selected.increment(++this.s)
  }

}
