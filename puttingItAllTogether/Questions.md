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