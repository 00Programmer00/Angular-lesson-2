import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithoutTemplateComponent } from './component-without-template.component';

describe('ComponentWithoutTemplateComponent', () => {
  let component: ComponentWithoutTemplateComponent;
  let fixture: ComponentFixture<ComponentWithoutTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentWithoutTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithoutTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
