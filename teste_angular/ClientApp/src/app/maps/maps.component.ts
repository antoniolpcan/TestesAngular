import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;
  public lat = 0;
  public long = 0;

  private initMap(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.long = position.coords.longitude;
       
       if (this.lat != 0){
       console.log(this.lat, this.long);
       this.map = L.map('map', {
   
         center: [ this.lat, this.long ],
         zoom: 3
       });
   
       const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 20,
         minZoom: 15,
         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
       });
       tiles.addTo(this.map);
      }
      });
     }
    else {
     alert("Geolocation is not supported by this browser.");
    }
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}