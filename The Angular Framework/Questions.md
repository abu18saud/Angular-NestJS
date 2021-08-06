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

