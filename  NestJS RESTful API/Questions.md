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