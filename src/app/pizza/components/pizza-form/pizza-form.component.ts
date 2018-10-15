import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Topping } from '../../pizza.interface';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nrf-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent {
  @Input()
  toppings: Topping[];

  @Output()
  add = new EventEmitter<FormGroup>();

  form = this.fb.group(
    {
      name: ['', Validators.required],
      toppings: this.fb.array([])
    }, {
      validator: null // todo
    }
  );

  constructor(private fb: FormBuilder) { }

  get control() {
    return this.form.get('toppings') as FormArray;
  }

  addTopping(topping: Topping) {
    this.control.push(new FormControl(topping));
  }

  removeTopping(index: number) {
    this.control.removeAt(index);
  }

  selectTopping(topping: Topping) {
    const index = this.control.value.indexOf(topping);
    if (index > -1) {
      this.removeTopping(index);
    } else {
      this.addTopping(topping);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.add.emit(this.form.value);
  }

}
