import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LocationsComponent } from '../../components/locations/locations'
import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker
} from 'ionic-native';


/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  private map: GoogleMap;
  private marker: GoogleMapsMarker;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalController: ModalController) {


  }

  showLocationsList() {
    this.map.setClickable(false);
    let locationsModal = this.modalController.create(LocationsComponent, {});
    locationsModal.onDidDismiss(data => {
      this.loadNewLocation(data);
    });
    locationsModal.present();
  }

  loadNewLocation(location) {
    if(location == null){
      return;
    }
    this.map.setClickable(true);
    this.marker.remove();
    this.createMarker(location.Lat, location.Lon  );
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    this.map = new GoogleMap(element);

    // listen to MAP_READY event
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        // create LatLng object
        this.createMarker(0, 0);
    });

    
  }

  createMarker(Lat, Lon) {
    let newMarker: GoogleMapsLatLng = new GoogleMapsLatLng(Lat, Lon);

    // create CameraPosition
    let position: CameraPosition = {
      target: newMarker,
      zoom: 18,
      tilt: 30
    };

    // move the map's camera to position
    this.map.moveCamera(position);

    // create new marker
    let markerOptions: GoogleMapsMarkerOptions = {
      position: newMarker,
      title: 'Je fiets'
    };

    this.map.addMarker(markerOptions).then((marker: GoogleMapsMarker) => {
      this.marker = marker;
      marker.showInfoWindow();
    });
  }

}
