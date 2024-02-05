import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredientsdata.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients:Ingredients[]=[
    new Ingredients('apple',23),
    new Ingredients('banana',10)
  ];
}
