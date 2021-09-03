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

