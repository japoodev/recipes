import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  recipes = [
    {
      name: 'Pizza',
      ingredients: [
        { name: 'Dough', amount: 1, unit: 'package' },
        { name: 'Sauce', amount: 1, unit: 'jar' },
        { name: 'Cheese', amount: 2, unit: 'cups' },
        { name: 'Pepperoni', amount: 1, unit: 'package' },
      ],
    },
    {
      name: 'Tacos',
      ingredients: [
        { name: 'Tortillas', amount: 8, unit: 'count' },
        { name: 'Ground Beef', amount: 1, unit: 'pound' },
        { name: 'Cheese', amount: 3, unit: 'cup' },
        { name: 'Salsa', amount: 0.5, unit: 'jar' },
        { name: 'Sour Cream', amount: 2, unit: 'cup' },
      ],
    },
    {
      name: 'Spaghetti',
      ingredients: [
        { name: 'Noodles', amount: 1, unit: 'package' },
        { name: 'Sauce', amount: 1, unit: 'jar' },
        { name: 'Meatballs', amount: 6, unit: 'count' },
      ],
    },
    {
      name: 'Chicken parmesan',
      ingredients: [
        { name: 'Chicken', amount: 1, unit: 'pound' },
        { name: 'Pasta', amount: 0.5, unit: 'package' },
        { name: 'Sauce', amount: 3, unit: 'tbsp' },
        { name: 'Cheese', amount: 2, unit: 'cup' },
      ],
    },
    {
      name: 'Chicken noodle soup',
      ingredients: [
        { name: 'Chicken', amount: 1, unit: 'pound' },
        { name: 'Noodles', amount: 2, unit: 'package' },
        { name: 'Broth', amount: 0.5, unit: 'package' },
      ],
    },
  ];

  selected: string | undefined;
  selectedRecipe: any;
  selectedServing: number | undefined;
  missing:boolean = false;
  addExtra: boolean = false;
  onSelect() {
    this.selectedRecipe = this.recipes.find(
      (recipe: any) => recipe.name === this.selected
    );
  }
  addIngredient(form: any) {
    this.selectedRecipe.ingredients.push(form.value);
  }
  feedback(form: any) {
    alert(
      `Thank you for your feedback! We will add ${form.value.name} to the recipe.`
    );
    console.log(form.value);
  }
}
