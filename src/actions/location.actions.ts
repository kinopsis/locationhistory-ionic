import {Injectable} from '@angular/core';  
import {Action} from '@ngrx/store';

import {Location} from '../models/location';

@Injectable()
export class LocationActions {

    static ADD_LOCATION = 'ADD_LOCATION';
    addLocation(location: Location): Action {
        return {
            type: LocationActions.ADD_LOCATION,
            payload: location
        }
    }

    static DELETE_LOCATION = 'DELETE_LOCATION';
    deleteLocation(location: Location): Action {
        return {
            type: LocationActions.DELETE_LOCATION,
            payload: location
        }
    }
}