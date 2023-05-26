import { Component } from '@angular/core';
import * as AOS from 'aos';
import { LocationName } from './models/location-name';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'roomManagementSystem';
  cityName: LocationName = '';

  ngOnInit(): void {
    AOS.init();
  }
}
