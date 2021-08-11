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

# One Way Data Binding
- https://t.me/CsharpAbdullahAlsalem/184
1. User clicks on a button in the view. The (click) event is wired to an "increment" method, asking the component to fire a method with the same name.
2. The component receives the click event and fires the increment() method, which updates the counter.
3. The counter variable in the component is updated and then sends that updated value to the view.
4. The view receives the updated counter variable and then updates the display so that the user sees a new number appear.

- With one-way data binding, data flows in one direction. Imagine a ceiling fan. Even though the blades are flowing in a circular fashion, the movement is still only going in one direction.

# Two Way Data Binding
- Two way data binding is when the flow of data between the view and the component goes both ways. There's a central "model" or variable container. If its updated in the view, then the component gets the change. If its updated in the component, then the view gets the change. The flow of data can go either way.
- Since then, developers have universally agreed that two way data binding should be used sparingly because of its intense demands on system resources. With that said, two way data binding is still possible in Angular 8. There are certain situations where it can be useful when used judiciously.

In this lesson, we will implement a simple widget that allows you to see what you’re typing being reflected in the view as you are typing it in real time.

The end goal is that you can type into a text field and see the result of what you have typed being stored in a model, which is displayed in the view.

# Banana in a Box

The construct that allows two way data binding looks like this:
<input [(ngModel)] = "username">
HTML
The [()] construct in Angular enables two way data binding. Some developers call this the "banana in a box".

It’s actually a combination of the square brackets [ ] which indicate data binding from the component into the view, (the "box") and the parentheses ( ) which enable data binding from the view back up to the component (the "banana").

We’ve seen the parentheses in the view earlier:
button (click) = "increment()"
TS
In our <button (click) = "increment()"> example, the (click) was an example of one way data binding from the view to the component.

The square brackets, on the other hand, represent the data flow from the component back down into the view. By putting them together, Angular gives us a bi-directional flow of data. The "banana in a box".
Angular models as implemented via ngModel have nothing to do with databases or storage on the back-end. A model in Angular temporarily holds data within the front-end application.

# ngModel

Let’s look at a diagram of two way data binding. Data goes in two directions. When you type in something in the input field in the VIEW, it updates the model in the COMPONENT, which then sends the updated model value back to the VIEW. All of this is happening almost instantly. This is possible due to a special type of model called ngModel.

ngModel allows you to type in a field and watch the value of that variable be updated instantly as you type.








