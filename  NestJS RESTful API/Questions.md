# Which of the following statements is false?
- Databases serve data directly to front-end applications

# If a controller receives a valid request: (- true: * False)
* It should not return a response
- It may hit a database before sending a response
* It always hits a database before sending a response
* It must return a JSON response
- It may return a response without touching a database
- It should return an appropriate response

# Complete the url below to ensure that we are displaying the ROOT of a website called flowers.com
- https://www.flowers.com/

# A "route" generally refers to:
- the part of the url after the domain

# A get route is for sending data to the server and a post route retrieves data from a server.
- false

# Which statements are true about routes?
* POST request from front-end connects to GET route
- POST requests send bundles of data
- GET requests from a front-end connect to GET routes on back-end
* GET request from front-end connects to POST route
- You can have two routes with the same name but different types

# Which of the following processes allow us to type one line of code in the terminal that creates the whole project for us within a matter of seconds?
- Scaffolding

# Localhost refers to which of the following:
- Your local computer address

# Services in both NestJS and Angular do which of the following:
- Relay data to and from controllers and components respectively

# Complete the NestJS server response to respond with the word "rice" when someone visits localhost:3000. Do not use a service, just return a string.

@Get()
  getFood(): string {
     return "rice";
}

# Complete this code so that it will compile.
@Get()
randomNumber(): number
 { 
return Math.floor(Math.random( ) * 10);
}

# Order the procedure of setting up a NestJS back-end application with a /hello route that is designed to print out the words "hello everyone!". The route the user will hit will look something like this:
https://www.xyz.com/hello

- Scaffold the NestJS application in the terminal
- Scaffold the /hello route
- Open the hello controller add a string return type to the hello route \
- Return "hello everyone!" in the /hello route code block

# A bicycles controller in NestJS that has a GET route with no parameters will direct users to which of the following:
- a route with the url of /bicycles

# Finish the code below so that this GET route is set up to return a simple JavaScript object.
getCreds(@Req() request: Request): {}
 {
   return {uuid: '12x8s', auth: true, tokenize: false}
 }

# Complete this nested route decorator where 'vegan' is a nested route under 'foods'
@Get('foods/vegan')
      veganfoods(@Req() request: Request): string {
     return 'this is the vegan foods route';
}

# Which of the following are true statements about wildcard routes?
- the root route to any site is usually a wildcard route
* wildcard routes can be nested routes
* wildcard routes accept variable segments in the url
* wildcard routes can be GET routes

# Which one of the following best describes the function of an API for a grocery store?
- An API is like a specific way to engage with a store

# RESTful routes:
- Are a standard way to communicate with an API

# Complete the full name of each step of the CRUD process.
Create
Read
Update
Delete

# By convention, in RESTful routes, which of the following should return a collection of stamps?
- GET /stamps

# Describe the data journey associated with a POST request by rearranging the steps:
1- Front-end sends a bundle of data to a POST route - ترسل الواجهة الأمامية مجموعة من البيانات إلى مسار POST.
2- Back-end receives POST request - تتلقى النهاية الخلفية طلب POST
3- POST request is sent to appropriate POST route - يتم إرسال طلب POST إلى مسار POST المناسب
4- POST route receives bundle of data and encodes it in a temp variable - يستقبل مسار POST حزمة من البيانات ويرمزها في متغير مؤقت
5- POST route does something with received data - يقوم مسار POST بعمل شيء مع البيانات المستلمة
6- POST route sends a response - يرسل مسار POST ردًا

# Why do we need to accept an id when updating something?
- We will use the id to look up the record in the database

# Why do we only need to pass an id in a "delete" POST request?
- All we need is the id to locate the record to delete

# Complete the following SQL statement to insert a book into a PostgreSQL books table in a database. Assume that the id field is an auto-incrementing (serial) value. 
- INSERT INTO books (DEFAULT,  "Goodnight June", "A quiet book", "April Johnson", " 978-3-16-148410-0" )


# By using an ORM, like TypeORM, we are able to change databases while not having to change database queries to the server.

- True

# How does an ORM know where to pull data when querying in an underlying database?
- TypeORM can be configured to know the name of the database and the table we are targeting

# In which of the following files do you tell NestJS where to establish a database connection for TypeORM?
- app.module.ts

# An "Entity" in TypeORM helps us to interact with which of the following?
- database table

# What is the role of a Repository in TypeORM?
- It holds all of the database query methods we will need to use

# Complete the following code so that the id coming in from the GET request is passed on to the FoodService.
- @Get("/:id")
  findOne(@Param() incoming): Promise<FoodItem[]> {
  return this.FoodService.findOne(incoming.id);
}

# In NestJS one key difference between a service and a controller is which of the following:
- The controller receives GET requests from the front-end - تستقبل وحدة التحكم طلبات GET من الواجهة الأمامية
- The service interfaces with a repository of database methods

