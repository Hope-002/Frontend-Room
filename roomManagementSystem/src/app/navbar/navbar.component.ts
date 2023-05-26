import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocationName } from '../models/location-name';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // cityName!: LocationName;

  // @Output() gotoLocation = new EventEmitter<LocationName>();

  constructor(public router: Router) {}
  ngOnInit(): void {}

  goto(val: string) {
    this.router.navigate([`app-locations/${val}`]).then(() => {
      window.location.reload();
    });
  }
  // goto(location: string) {
  //   let LocationName: LocationName = location;
  //   this.cityName = LocationName;
  //   console.log(this.cityName);
  //   this.gotoLocation.emit(this.cityName);
  // }
}
