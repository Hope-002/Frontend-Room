import { Component } from '@angular/core';
import { RoomServiceService } from '../room-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-all-location',
  templateUrl: './all-location.component.html',
  styleUrls: ['./all-location.component.css'],
})
export class AllLocationComponent {
  roomList: any;
  location: any;
  cityName: any;
  loader: boolean = true;
  notFound: boolean = false;

  constructor(
    private RoomService: RoomServiceService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
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
        this.router.navigate([`/app-not-found`]);
      }
    );
  }

  goto(val: string) {
    this.router.navigate([`app-details/${val}`]).then(() => {
    });
  }

  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  search() {
    if (this.location === '') {
      this.ngOnInit();
      this.reload();
    } else {
      this.roomList = this.roomList.filter((result: { location: string }) => {
        return result.location
          .toLocaleLowerCase()
          .match(this.location.toLocaleLowerCase());
      });
      this.loader = false;
      if (this.roomList.length === 0) {
        this.notFound = true;
      }
    }
  }

  reload(): void {
    window.location.reload();
  }
}
