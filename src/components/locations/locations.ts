import { Component, ViewChild } from '@angular/core';
import { ViewController, List } from 'ionic-angular';
import { Location } from '../../models/location';
import { Observable } from 'rxjs/rx';
import { Store } from '@ngrx/store';
import { AppState } from '../../services/app-state';  
import { LocationActions } from '../../actions/location.actions';

/*
  Generated class for the Locations component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'locations',
  templateUrl: 'locations.html'
})
export class LocationsComponent {
  @ViewChild(List) list: List;
  public locations$: Observable<Location[]>;


  constructor(private viewCtrl : ViewController, private store: Store<AppState>, private locationActions : LocationActions) {
    this.locations$ = this.store.select(state => state.locations);
  }

  delete(item) {
    this.store.dispatch(this.locationActions.deleteLocation(item));
  }

  dismiss(data) {
   this.viewCtrl.dismiss(data);
  }

}
