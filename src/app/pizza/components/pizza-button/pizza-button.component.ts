import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'nrf-pizza-button',
  templateUrl: './pizza-button.component.html',
  styleUrls: ['./pizza-button.component.scss']
})
export class PizzaButtonComponent {
  @Input()
  parent: FormGroup;

  @Output()
  add = new EventEmitter<any>();

  onClick() {
    this.add.emit();
  }
}

