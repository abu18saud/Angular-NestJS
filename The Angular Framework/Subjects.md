# Custom Types

interface Order {
  customerName: string,
  itemNumbers: number[],
  isComplete: boolean
}

let order1: Order;
order1 = {
  customerName: "Abiye",
  itemNumbers: [123,44,232],
  isComplete: false
}

# Optional Fields in Interfaces

interface Order {
  customerName: string,
  itemNumbers: number[],
  isComplete?: boolean
}

let order1: Order;
order1 = {
  customerName: "Abiye",
  itemNumbers: [123, 44, 232]
}

# Using TypeScript within Angular
- https://t.me/CsharpAbdullahAlsalem/180
- https://stackblitz.com/edit/angular-class-vs-method-variables-intro?file
- https://github.com/SoloLearn-Courses/angular-class-vs-method-variables-intro

- https://t.me/CsharpAbdullahAlsalem/181 - Class vs Method Variables


# Arrays and Iteration

Given this array in the Angular component:
colors:string[] = ['red', 'blue', 'green', 'purple'];

We can loop through the colors in the accompanying HTML file in Angular like this:
<div *ngFor='let color of colors'> 
  {{color}} 
</div>

The result in your browser will look like this:
red
blue
green
purple

- Iterating with Indices

<div *ngFor='let fruit of fruits; let i=index'>
   Fruit {{ i }} is {{ fruit }} 
</div>

- Iterating through Custom Types

export interface Car {
  make: string;
  model: string;
  miles: number;
}

import { Car } from './car';


subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
honda: Car = {make: 'Honda', model: 'Accord', miles: 39393};
bmw: Car = {make: 'BMW', model: 'X3', miles: 4400};
cars:Car[ ] = [this.subaru, this.honda, this.bmw];

<div *ngFor="let car of cars">
   {{car.make}} {{car.model}}  with a mileage of {{car.miles}}
</div>

Here is our output:
Subaru Outback with a mileage of 58232
Honda Accord with a mileage of 39393
BMW X3 with a mileage of 4400

# https://stackblitz.com/edit/angular-loop-thru-custom-type?file

# Generating an Angular Service


- ng generate service transportation



