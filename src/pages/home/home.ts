import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { MapPage } from '../map/map';
import { Geolocation, NFC, Ndef } from 'ionic-native';
import { Store } from '@ngrx/store';  
import { Observable } from 'rxjs/rx';

import { AppState } from '../../services/app-state';  
import { Location } from '../../models/location'; 
import { LocationActions } from '../../actions/location.actions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  public mapPage;
  public locations$: Observable<Location[]>;
  public platform;

  constructor(public navCtrl: NavController, private store: Store<AppState>, private locationActions: LocationActions, platform : Platform) {
    this.mapPage = MapPage;
    this.locations$ = this.store.select(state => state.locations);
    
    // thi  s.addNfcListener();
  }

  addNfcListener() {
    NFC.addTagDiscoveredListener().subscribe((test) => {
      this.saveLocation();
    })
  }

  saveLocation() {
    console.log('test');
 
      Geolocation.getCurrentPosition().then((resp) => {
        console.log(resp);
        this.store.dispatch(this.locationActions.addLocation({
          Lat: resp.coords.latitude,
          Lon: resp.coords.longitude,
          Date: new Date()
        }));
      }).catch((error) => {
        console.log('Error getting location', error);
      });
 
    
  }

  
  


}
