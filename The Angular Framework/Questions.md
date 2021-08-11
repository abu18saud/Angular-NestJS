# Order the Angular releases from top to bottom in the order of their release, starting with the oldest.
اطلب إصدارات Angular من أعلى إلى أسفل بترتيب إصدارها ، بدءًا من الأقدم. الزاوي 8 الزاوي 5 أنجولار جي إس الزاوي 2 الزاوي 4

- AngularJS
- Angular 2
- Angular 4
- Angular 5
- Angular 8


# Declare a string type variable named user with a value of Samson.
قم بتعريف متغير نوع سلسلة يسمى مستخدم بقيمة Samson.

let user : string = 'Samson';

# ملاحظة هامة
Typescript includes all methods that you are used to using in JavaScript. For example, string methods like parseInt() and parseFloat() that return numbers will also work in TypeScript.
يتضمن Typescript جميع الطرق التي اعتدت استخدامها في JavaScript. على سبيل المثال ، ستعمل طرق السلسلة مثل parseInt () و parseFloat () التي تُرجع الأرقام أيضًا في TypeScript.

# Complete the TypeScript expression below to declare two number variables named a and b that are later added together to make a third number variable that is the sum of the two variables a and b.
أكمل تعبير TypeScript أدناه للإعلان عن متغيرين رقميين يحملان اسم a و b يتم إضافتهما معًا لإنشاء متغير رقم ثالث يمثل مجموع المتغيرين a و b.

const a : number = 6;
const b : number = 4;
const result : number = a + b;

# Reorder the following TypeScript lines to declare a boolean, assign it a value, and then output its value. 
أعد ترتيب أسطر TypeScript التالية لتعريف منطقية ، وعيّن لها قيمة ، ثم أخرج قيمتها.

- let isOpen: boolean;
- isOpen = false;
- console.log(isOpen);

# Enums
enum spiceLevel {
  NONE = "no spice",
  LOW = "barely spicy",
  MEDIUM = "medium spicy",
  HIGH = "hot"
}

console.log(spiceLevel.MEDIUM); 
// outputs "medium spicy"

# What will be the output of this program?
enum colors {
  RED = "#FF0000",
  GREEN = "#00FF00",
  BLUE = "0000FF",
}
let userChoice = "#FF0000";
let isRed: boolean = false;
if (userChoice == colors.RED) {
  isRed = true;
}
console.log(isRed);

- true

# any
let userData: any;

userData = 22;
console.log(userData + 2);
// logs 24

userData = "free";
console.log(userData + "man");
// logs "freeman";


# What will be the output of this program?

let receivedData: any;
receivedData = '5';
if (typeof(receivedData) === 'number') {
  receivedData += 5;
} else {
  receivedData += 10;
}
console.log(receivedData);

- 510


------------- Custom Types
# Complete this code so that the Student interface’s contract is fulfilled and the code will compile.

interface Student {
  id: number,
  name: string
}

let tewodros: Student;
tewodros = {
id: 42,
name: "Tewodros"
}

---------- Optional Fields in Interfaces
# Complete this code so that the Student interface’s contract is fulfilled and the code will compile.
أكمل هذا الرمز حتى يتم الوفاء بعقد واجهة الطالب وسيتم تجميع الكود.

interface Student {
  id: number,
  name: string,
  favoriteFood?: string, 
  isAlumni? : boolean
}
let ana: Student;
ana = {
  id : 25,
  name : "ana"
}
---------- Using TypeScript within Angular
# Type in an example of variable interpolation to make the title variable display in the view.

- component:
title = "Star Wars";
- view:
<div>
The title of this movie is {{title}}
</div>

# Method variables apply to:
- The method that they are declared in

# Which of the following is true about class and method variables in components?
- method variables must be initialized with a keyword like var, let, or const
- if you refer to a class variable inside of a method, you must use 'this'

---------- Arrays and Iteration
# Complete this Angular HTML code so that it will loop through a string array of fruits coming from the associated Angular component.

<div *ngFor = 'let fruit of fruits'> 
  {{ fruit }} 
</div>

# Complete the Angular code below in the html file to use indices in the *ngFor loop.

<div *ngFor='let student of students; let j = index'>
Student {{ j }}, whose name is {{ student }}, is in class.
</div>

# Complete the code where countries is an array of Country type, and each Country has a name and a capital.

<div *ngFor="let country of countries">
  The capital of {{country.name}} is {{country.capital}}
</div>

---------- Reading Data
# A user clicks on a button and receives a list of evening gowns. Arrange the journey of data of evening gowns after these initial three steps:

• Database query is performed
• Database delivers query results to server
• Server processes and formats evening gown data

- Server sends JSON of gowns to front-end
- Angular service receives gowns
- Angular component receives gowns
- Angular view receives gowns

# Order the process through which data makes its way from a service to an HTML view:
- component makes a call to a service requesting data
- service receives call from component and collects data
- service sends data to component
- component passes data to view
- view receives data
- view iterates through the data using *ngFor


---------- Generating an Angular Service
# The class body of a service is where:
- we write methods that export data out of the service


# Given the GroceryItem interface below, complete the code in a service to import the interface.
groceryItem.ts

export interface GroceryItem {
  name: string;
  sku: string;
  price: number;
}

market.service.ts
import {GroceryItem} from './groceryItem';

# Recreating Car Array in a Service
# Data is exported from services via:
- methods

# Implement dependency injection by injecting the users service into the school component.

import { Component } from '@angular/core';
import { UserService } from './users.service';
import { User } from './user';

export class AppComponent  {
  users: User[ ];

constructor (private userService: UserService
) {
 this.users = this.userService.getUsers();
  }
}

------------------- Angular Events

# Given the following code in the component, finish this Angular view code to trigger the "register" method from the component:

app.component.ts

register() {
  this.userService.registerUser(this.idCache);
}

<button (click)="register()">
  Register new user
</button>

# Arrange the following elements in the order they occur.
The button triggers an event
A user clicks on a button
The updated value is displayed in the view
The component responds by updating a value
The event invokes a method in the component

# The button will double an integer every time the button is pressed.  Complete the code.

COMPONENT
counter = 1;
double() {
this.counter *=2;
}

VIEW
{{counter}}
<button (click) = "double()" > double the number </button>



# Data binding describes the flow of data:
- beetween component and view

# Two way data binding stores data inside of a:
- model

----------------Banana in a Box
In an Angular view, square brackets in a construct as seen below represent what?
 
<input [(ngModel)] = "nationality"> 

- data flow the component to the view



