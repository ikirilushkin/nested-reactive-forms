import { NgModule } from '@angular/core';
import { PizzaCreatorComponent } from './components/pizza-creator/pizza-creator.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaNameComponent } from './components/pizza-name/pizza-name.component';
import { PizzaButtonComponent } from './components/pizza-button/pizza-button.component';
import { ToppingsSelectorComponent } from './components/toppings-selector/toppings-selector.component';
import { PizzaService } from './pizza.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JoinPipe } from './pipes/join.pipe';
import { PizzaSelectedComponent } from './components/pizza-selected/pizza-selected.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule
    ],
    declarations: [
      PizzaCreatorComponent,
      PizzaFormComponent,
      PizzaListComponent,
      PizzaNameComponent,
      PizzaButtonComponent,
      PizzaSelectedComponent,
      ToppingsSelectorComponent,
      JoinPipe
    ],
    providers: [PizzaService],
    exports: [PizzaCreatorComponent]
})
export class PizzaModule {}
