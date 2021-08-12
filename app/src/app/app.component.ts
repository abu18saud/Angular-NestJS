import { Component } from '@angular/core';
// here is where we import the car interface
import { TransportationService } from './transportation.service';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars: Car[];
  make: string = "";
  model: string = "";
  miles: number = 0;
  username: string = "";

  title = 'app';

  constructor(private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
  }

  saySomething() {
    var n: string = "1";
    alert(n);
  }
  register() {
    //this.userService.registerUser(this.idCache);
  }

  counter = 0;
  increment() {
    this.counter++;
  }

  dcounter = 1;
  double() {
    this.dcounter *= 2;
  }

  phrase = "It's going";
  update() {
    this.phrase += " ..and going";
  }

  addCar(){
    const newCar: Car = {make: this.make, model: this.model, miles: this.miles };
    this.transportationService.addCar(newCar);
  }


}
