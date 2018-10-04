import { NgModule } from '@angular/core';
import { PizzaCreatorComponent } from './components/pizza-creator/pizza-creator.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaNameComponent } from './components/pizza-name/pizza-name.component';
import { PizzaButtonComponent } from './components/pizza-button/pizza-button.component';
import { ToppingsSelectorComponent } from './components/toppings-selector/toppings-selector.component';

@NgModule({
    imports: [
        PizzaCreatorComponent,
        PizzaFormComponent,
        PizzaListComponent,
        PizzaNameComponent,
        PizzaButtonComponent,
        ToppingsSelectorComponent
    ],
    declarations: [],
    providers: [],
    exports: [PizzaCreatorComponent]
})
export class PizzaModule {}
