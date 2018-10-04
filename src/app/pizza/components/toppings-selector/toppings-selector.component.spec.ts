import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingsSelectorComponent } from './toppings-selector.component';

describe('ToppingsSelectorComponent', () => {
  let component: ToppingsSelectorComponent;
  let fixture: ComponentFixture<ToppingsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppingsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
