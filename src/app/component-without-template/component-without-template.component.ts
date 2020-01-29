import { Component } from '@angular/core';

@Component({
  selector: 'app-component-without-template',
  template: `<h1>{{title}}</h1>`
})
export class ComponentWithoutTemplateComponent {
  title = 'Hello World';
}
