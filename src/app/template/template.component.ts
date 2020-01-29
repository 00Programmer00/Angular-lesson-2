import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @Input() childItem: object;
  @Output() changeImage = new EventEmitter<string>();

  example = 'hello';
  count = 0;
  disabled = true;
  isSpecial = true;
  currentClasses =  {
    saveable: true,
    modified: false,
    special:  true
  };

  constructor() { }

  ngOnInit() {
  }

  getValue() {
    return 3;
  }

  change(url) {
    this.changeImage.emit(url);
  }

  clickHandler() {
    this.count++;
  }

  callPhone(value) {
    console.log(value);
  }

  changeState(event) {
    console.log(event);
    this.disabled = !this.disabled;
  }

}
