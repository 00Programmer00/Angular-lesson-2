import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentWithoutTemplateComponent } from './component-without-template/component-without-template.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { TemplateComponent } from './template/template.component';
import { UserEventsComponent } from './user-events/user-events.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentWithoutTemplateComponent,
    NgForComponent,
    TemplateComponent,
    UserEventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
