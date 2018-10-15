import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Topping } from '../../pizza.interface';

@Component({
  selector: 'nrf-toppings-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toppings-selector.component.html',
  styleUrls: ['./toppings-selector.component.scss']
})
export class ToppingsSelectorComponent {
  touched = false;

  @Input()
  parent: FormGroup;

  @Input()
  selected: Topping[];

  @Input()
  toppings: Topping[];

  @Output()
  select = new EventEmitter<Topping>();

  get invalid() {
    return (
      this.parent.hasError('noToppings') && this.touched
    );
  }

  exists(topping: Topping) {
    return this.selected.indexOf(topping) < -1;
  }

  isActive(topping: Topping) {
    return this.exists(topping);
  }

  onSelect(topping: Topping) {
    this.touched = true;
    this.select.emit(topping);
  }
}
