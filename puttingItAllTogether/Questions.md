# Our application will feature a front-end built with Angular, a NestJS web application server and which type of database?
- PostgreSQL

# What command would you type in the terminal to ensure your system has access to the latest version of Angular?
- ng upgrade

# The ng new command:
- Creates a new Angular application

# The full source code for both the front-end and back-end will be accessible where?
- GitHub

# Which of the following is false.
- SPAs cut down on duplicated content
- Google used the SPA concept to build Gmail
- SPAs load sub pages into one main page
* SPAs are typically slower than traditional web apps
- SPAs typically build an entire website on one page

# Complete the code to create two routes with path names "home" and "admin":
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path : 'home' ,
   component: HomeComponent},
  { path : 'admin',
   component: AdminComponent},
];

# Complete the HTML code so that clicking on the link will make the store page appear as a sub page beneath the nav bar: 

<div> 
  <a routerLink ="store">shop now ! </a> 
</div>
<router-outlet></router-outlet>

# Complete the code to make the following link work with the Angular router.
<a routerLink= "cars">  view cars </a>

# Use dependency injection to inject a taco service into the restaurant constructor.
import { TacoService } from '../flights.service';

export class FoodComponent {
  constructor(private tacoService : TacoService) { }
}

# Which of the following is true about our flight model?
- It provides structure for what a flight should look like

# Angular often uses which of the following to relay data or information to a back-end?
- services

# Complete the following code so that the outer div has a class of "container" and the boxes inside of the container have a class of "box".
<div *ngFor="let color of colors" class = "container"> 
  <div class="box"> {{ color }} </div> 
</div>

# Complete the basic date pipe in order to transform the copyright_date into a readable format. Assume that the copyright_date field is a JavaScript Date object.
<div> 
  All content ©  {{ copyright_date | date}}
</div>

# The src/styles.scss stylesheet contains styles that will apply to which of the following?
- all components in the app

# In SCSS, we can use nested styles to hierarchically fit styles inside of their parent elements in the stylesheet.
- True

# An Angular controller has an array of link objects that looks like this:

links = [ {name: "home", class: "red"}, {name: "about", class: "black"}, {name: "contact", class: "green"} ] ; 

Complete the html view so that all of the links connect to the name of each link and each link's class is set to the class of the object:

<div *ngFor="let link of links">
  <a routeLink={{link.name}}  class={{link.class}}> {{link.name}} </a>
</div>


# Complete the media query below to remove borders from the .registration_box when the screen width falls below 500 pixels:

.registration_box {
border: 1px solid black;
@ media screen and (max-width: 499px) {
    border: none;
  }
}

# A media query that says @media screen and (min-width: 400px) would apply to all devices with:
- a width of 400 pixels or more

# Complete the code to ensure that customerTotal is being fed through a currency pipe with a format that outputs the currency in Euros.

<div class="customer_total">
  {{ customerTotal | currency : "EUR" }}
</div>


# You need to create a new birds table with one bird in the PostgreSQL animals database. Order the following commands to make that happen
psql (logs into postgres)
\c animals
CREATE TABLE birds (id SERIAL, name VARCHAR(20));
INSERT INTO birds VALUES (DEFAULT, 'Mockingjay');

# In a NestJS application, which of the following contains the code that defines the API endpoints?
- Controller

# In Angular, which of the following are things that we can subscribe to in order to obtain a stream of data from an external source like an API coming from a NestJS back-end?
- Observables


# In Angular, if we see this inside of a method in a service:

return this.http.get('http://localhost:3002/flights/');

What will always be returned by this type of return statement?

- an observable

# Complete the query to find all flowers whose color is the parameter passed in by the user:
async query(color: string): Promise<any> {
    return await this.flowerRepository.query(
      ` Select * from flowers where color = '${color}'`);
  }

# POST requests have a bundle of data that we call the body, where GET requests take in incoming segments of information in the url that we call what?
- params

# The difference between a PATCH and a POST in HTTP is:
- POST is for creating and PATCH is for updating

# Delete methods in APIs typically only require ids because:
- An id is all that is needed to locate a record to delete

# You might get a CORS error if you are:
- trying to access one port from another port

# Complete the Angular code to connect this button to a component method named "calculate( )".

<button (click)="calculate()">Calculate fare</button>

# We use ngModels to do which of the following:
- store variable data

# What is the primary reason that we must use a POST request instead of a GET request to send a flight object to the back-end?
- POST requests do not expose data the way GET requests do

# Order the events required to dynamically populate a view with a list of destination cities from our database.
1- make an XHR to retrieve data from back end
2- map through the back end data to extract all destinations
3- store the list of unique cities
4- use *ngFor to iterate over unique cities in the view

# Complete the TypeORM method to write a custom query that gets all unique first_name values from a "students" table without returning any duplicates. 

async getUniqueFirstNames(): Promise<String[]> {
  return this.studentRepository.query
("SELECT 
 first_name FROM students");
}



# You have a controller with an array of animal names called animals. Code a drop down in the view to put all of the animal names in a select menu. Note that the value of each option in the select menus is being set to the index of the animal but the display name should be the actual animal name. 

<select> 
 <option 
 * ngFor= "let animal of animals; let i=index"  value={{i}}>
   {{animal}}
</option>
</select>

# You have an array of fruits in a component file. In the corresponding view, complete this ngFor loop so that each fruit in the array is listed with its number but using natural numbers, so that the counting starts with 1 instead of 0. In essence, the list should look like this:  "apple is 1, pear is 2, orange is 3… ", etc. 

<div *ngFor="let fruit of fruits; let i=index">
  {{fruit}} is {{i+1}}
</div>

# How would we add a line under the <tr> row to show the database id of each flight?

<tr *ngFor="let flight of flightList; let i=index">
  <td><input [(ngModel)]='flight.origin'></td>
  <td><button class="update" (click)="update(flight)">go</button></td>
  <td><button class="delete">go</button></td>
</tr>

- <td>{{ flight.id }}</td>


# Complete this method in the Angular service to call a back-end /students/:id/update method. Remember that the second parameter sent to the back-end needs to be a student object.

updateStudent(student: Student) {
  return this.http.post(
    `https://olduniversity.com/students/${student.id}/update`,student);
}



