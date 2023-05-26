import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AllLocationComponent } from './all-location/all-location.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LocationsComponent } from './locations/locations.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CarouselModule } from 'primeng/carousel';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomServiceService } from './room-service.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {MatDialogModule} from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LocationsComponent,
    FooterComponent,
    ContactComponent,
    AllLocationComponent,
    NotFoundComponent,
    TermsAndConditionComponent,
    PrivacyPolicyComponent,
    DetailsComponent,
    AddRoomsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    CarouselModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    OrderModule,
    FilterPipeModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    MatProgressBarModule,
    NgxSkeletonLoaderModule,
    MatFormFieldModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule
  ],

  providers: [RoomServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
