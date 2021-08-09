import { Component } from '@angular/core';
// here is where we import the car interface
import { TransportationService } from './transportation.service';
import {Car} from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  cars: Car[];

  constructor (private transportationService: TransportationService) {
  this.cars = this.transportationService.getCars();
  }

  saySomething() {
    var n: string = "1";
    alert(n);
  }
}
