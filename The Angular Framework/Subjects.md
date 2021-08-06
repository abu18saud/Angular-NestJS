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


