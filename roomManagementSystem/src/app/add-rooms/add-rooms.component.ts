import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomServiceService } from '../room-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent {

  roomList: any;
  id: any;
  loader: boolean = true;
  roomId: any;
  roomName: any;
  roomType: any;
  cost: any;
  gender: any;
  location: any;
  offers: any;
  ratings: any;
  image: any;
  phoneNumber: any;

  constructor(
    private RoomService: RoomServiceService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private Http: HttpClient
  ) {
    this.roomList = [];
  }

  ngOnInit(): void {
    this.getAllRooms();
    this.id = this.router.url.split('?')[0].split('/').pop();
  }

  goBack() {
    window.history.back();
  }

  public getAllRooms() {
    this.RoomService.getRoomDetails().subscribe(
      (result: any) => {
        this.roomList = result;
        this.loader = false;
      },
      (error) => {
        this.loader = false;
        this.router.navigate([`/app-not-found`]);
      }
    );
  }

  AddRoom() {
    let addnewRoom = {
      roomId: this.roomId,
      roomName: this.roomName,
      roomType: this.roomType,
      cost: this.cost,
      gender: this.gender,
      location: this.location,
      offers: this.offers,
      ratings: this.ratings,
      image: this.image,
      phoneNumber: this.phoneNumber,
    };

    this.RoomService.addNewRoom(addnewRoom).subscribe((res: any) => {
      console.log(res);
      this.getAllRooms();
    });
  }
}
