import { Component, Input } from '@angular/core';
import { Pizza } from '../../pizza.interface';

@Component({
  selector: 'nrf-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent {
  @Input() pizzas: Pizza[];
}

