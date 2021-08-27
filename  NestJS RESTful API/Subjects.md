# Reviewing Data's Long Journey
- NestJS is a web application server. Its job is to handle requests from the front-end and deliver responses based on whichever tools it has available.

# Routes
- The root route of a website is generally the home page.

# Routes Continued
- A route is a pattern of words, often separated by slashes, that points to a specific controller within a web application server. That controller will handle that request appropriately.

Examples:
https://www.sololearn.com/cats
…..would be called the "/cats" route.

https://www.sololearn.com/dogs
…..would be called the "/dogs" route.

https://www.sololearn.com/stores/manage
…..would be called the "/stores/manage" route.

# GET vs POST
GET routes are generally to GET data from a server.
POST routes are generally to SEND data to a server.

- https://t.me/CsharpAbdullahAlsalem/189

# Get vs Post Requests
- The http verbs "GET" and "POST" are derived from the associated English verbs that they were derived from. "Get" is associated with retrieving something from a resource, where "Post" is associated with putting something into a place. When you "post" a parcel, you are sending it to a recipient, where "getting" a parcel means that you are receiving a package.
- https://t.me/CsharpAbdullahAlsalem/190

# What is NestJS
- NestJS is a type of web application server built with Node.js that uses
- TypeScript as its primary language. Node.js is a technology that allows
- JavaScript to run outside of a browser giving it the ability to create servers and command line interfaces.

# What is Scaffolding?
- Scaffolding is a term used to describe the process where you can type one line of code and a command line interface will create an entire boilerplate project or feature for you. It's like "just add water" pancakes. You don't need to know how it works, and the command gets you up and running quickly. Angular uses scaffolding as well.

# Running a Server Locally
- When you visit your local NestJS server on your computer, you will be visiting an address that looks like this: http://localhost:3000/

- When you run a server locally, most of the time, you are running that server in a space called "localhost", which simply refers to the address of your own personal computer.


# Anatomy of a NestJS Server
https://t.me/CsharpAbdullahAlsalem/193



# DB Steps
1) Before the steps postgresql must be installed. 
2) You can download and install from https://www.enterprisedb.com/downloads/postgres-postgresql-downloads 
3) After install you can use pgAdmin for administration. 
4) to use cli (cmd) in windows you need to add the path C:\Program Files\PostgreSQL\12\bin as a new PATH into computer => properties => advanced system settings=> Environment Variables => System Variables 
5) After 4 steps you can use psql in cmd - cli 6) You can use SQL Shell (psql) also

- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04



# Here are the commands written out in order:
createdb transportation 
psql // gets you into the psql command line 
\c transportation

CREATE TABLE cars 
(id SERIAL, make TEXT, model TEXT, miles INT);

INSERT into cars values 
(DEFAULT, 'subaru', 'outback', 3420);
INSERT into cars values 
(DEFAULT, 'honda', 'passport', 27);
INSERT into cars values 
(DEFAULT, 'volvo', 'XC40', 33000);

select * from cars;


# ORM
- https://t.me/CsharpAbdullahAlsalem/212
- https://github.com/nestjs/nest/tree/master/sample/05-sql-typeorm
-










