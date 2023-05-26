import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { AllLocationComponent } from './all-location/all-location.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { DetailsComponent } from './details/details.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'app-home',
    component: HomeComponent,
    resolve: { location: LocationsComponent },
  },
  {
    path: 'app-home/:location',
    component: HomeComponent,
    resolve: { location: LocationsComponent },
  },
  { path: 'app-all-location', component: AllLocationComponent },
  { path: 'app-locations', component: LocationsComponent },
  { path: 'app-locations/:location', component: LocationsComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-privacy-policy', component: PrivacyPolicyComponent },
  { path: 'app-terms-and-condition', component: TermsAndConditionComponent },
  { path: 'app-details/:id', component: DetailsComponent },
  {path:'app-add-rooms',component: AddRoomsComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  ContactComponent,
  HomeComponent,
  LocationsComponent,
  AllLocationComponent,
];
