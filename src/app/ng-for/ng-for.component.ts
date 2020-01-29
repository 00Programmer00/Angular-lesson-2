import { Component, OnInit } from '@angular/core';
import { Item } from '../class/item';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  title = 'Ng For:';
  items = [
    new Item(1, 'First'),
    new Item(2, 'Second'),
    new Item(3, 'Third'),
  ];
  myItem = this.items[0];
  constructor() { }

  ngOnInit() {
  }

}
