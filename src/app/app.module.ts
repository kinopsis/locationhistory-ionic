import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { LocationsComponent } from '../components/locations/locations';

import { StoreModule } from '@ngrx/store';  
import { LocationReducers } from '../reducers/location.reducers';  
import { LocationActions } from '../actions/location.actions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    LocationsComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore({ locations: LocationReducers })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    LocationsComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LocationActions]
})
export class AppModule {}
