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

# Dependency Injection

Now that our service is actually exporting data, our component needs to pull it in.

In Angular we use something called dependency injection to pull a service into a component.

This service is now ready to use by our component.
Here's what this looks like:

https://api.sololearn.com/DownloadFile?id=3821

Dependency injection is a common design pattern in object oriented programming.

Think of dependency injection like installing a weather app on your phone. Every phone that installs the weather app gets the same app. It can be installed on multiple phones, and every phone that clicks a "get weather" button for a city will get the same weather. The weather service is a central service that provides data for everyone who subscribes to it. That's what a service does through dependency injection. It usually provides data to all of its subscribers, along with other functionality.

# Note
Note how we create a private variable called transportationService that is of the type TransportationService. transportationService (with the lowercase t) is the variable and TransportationService (with an upperCase T) is the type. Those two naming conventions are called camelCase and PascalCase, respectively. Using camelCase for class variables and PascalCase for class and interface names is a convention seen throughout Angular.


# Angular Events


# Making a Counter
Our next exercise is an example using click events to make a counter increment. When you click on a button, the counter increments. This is what we will be trying to achieve:





