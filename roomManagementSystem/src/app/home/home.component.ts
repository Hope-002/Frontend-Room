import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from '../room-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationName } from '../models/location-name';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public roomList: LocationName[] = [];
  loader: boolean = true;

  locationName: any[] = [
    {
      id: 'Chennai',
      Name: 'Chennai',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg',
    },
    {
      id: 'Bengaluru',
      Name: 'Bengaluru',
      imageUrl:
        'https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg',
    },
    {
      id: 'Delhi',
      Name: 'Delhi',
      imageUrl:
        'https://www.travelandleisure.com/thmb/iAIrOVW7yWrDG8pZBpKMOvEGuNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-delhi-india-NEWDELHITG0721-60d592e1603349298a0206d67d08582b.jpg',
    },
    {
      id: 'CH',
      Name: 'Coimbatore',
      imageUrl:
        'https://static.toiimg.com/thumb/msid-66877015,width-400,resizemode-4/66877015.jpg',
    },
    {
      id: 'CH',
      Name: 'Madurai',
      imageUrl:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2019/03/Madurai.jpg',
    },
    {
      id: 'CH',
      Name: 'Mumbai',
      imageUrl: 'https://media.timeout.com/images/105241451/image.jpg',
    },
    {
      id: 'CH',
      Name: 'Pondicherry',
      imageUrl:
        'https://www.educationworld.in/wp-content/uploads/2021/01/french-quarters-pondicherry.jpg',
    },
    {
      id: 'CH',
      Name: 'Kolkata',
      imageUrl:
        'https://www.india-briefing.com/news/wp-content/uploads/2013/11/Kolkata-City-Profile.jpg',
    },
  ];

  constructor(
    private RoomService: RoomServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.roomList = [];
  }
  location: any;
  ngOnInit(): void {
    this.getAllRooms();
  }

  public getAllRooms() {
    this.RoomService.getRoomDetails().subscribe(
      (result: any) => {
        this.roomList = result;
        this.loader = false;
      },
      (error) => {
        this.route.navigate([`app-not-found`]);
      }
    );
  }

  goto(val: string) {
    this.route.navigate([`app-locations/${val}`]).then(() => {
      window.location.reload();
    });
  }

  gotoid(val: string) {
    this.route.navigate([`app-details/${val}`]).then(() => {});
  }
}
