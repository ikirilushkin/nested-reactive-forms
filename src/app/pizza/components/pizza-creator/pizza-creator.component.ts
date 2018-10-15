import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../pizza.service';
import { Pizza, Topping } from '../../pizza.interface';

@Component({
  selector: 'nrf-pizza-creator',
  templateUrl: './pizza-creator.component.html',
  styleUrls: ['./pizza-creator.component.scss']
})
export class PizzaCreatorComponent implements OnInit {
  pizzas$ = this.pizzaService.select<Pizza[]>('pizzas');
  toppings$ = this.pizzaService.select<Topping[]>('toppings');

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
  }

  addPizza(event: any) {
    this.pizzaService.addPizza(event);
  }
}
