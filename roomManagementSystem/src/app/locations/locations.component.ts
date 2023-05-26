import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from '../room-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  roomList: any;
  cityName: any;
  loader: boolean = true;

  constructor(private RoomService: RoomServiceService, private router: Router) {
    this.roomList = [];
  }

  ngOnInit(): void {
    this.getAllRooms();

    this.cityName = this.router.url.split('?')[0].split('/').pop();
  }

  public getAllRooms() {
    this.RoomService.getRoomDetails().subscribe(
      (result: any) => {
        this.roomList = result;
        this.loader = false;
      },
      (error) => {
        this.loader = false;
        this.router.navigate([`app-popup`]);
      }
    );
  }
  goto(val: string) {
    this.router.navigate([`app-details/${val}`]).then(() => {
    });
  }
}
