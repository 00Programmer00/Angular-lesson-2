import { Component } from '@angular/core';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent {
  values = '';
  value = '';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }

  onEnter(value: string) { this.value = value; }

  update(value: string) { this.value = value; }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
