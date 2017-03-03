import {ActionReducer, Action} from '@ngrx/store';  
import {LocationActions} from '../actions/location.actions';

let nextId = 0;

export function LocationReducers(state = [], action) {  
    switch(action.type) {
        case LocationActions.ADD_LOCATION:
            return [...state, Object.assign({}, action.payload, { id: nextId++ })];
        case LocationActions.DELETE_LOCATION:
            return state.filter(location => location.id !== action.payload.id);
        default:
            return state;
    };
}