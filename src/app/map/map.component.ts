import { Component, OnInit } from '@angular/core';
import Map from 'ol/map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: any;
  constructor() {}

  ngOnInit() {
    this.initilizeMap();
  }

  initilizeMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([80.64, 16.50]),
        zoom: 10,
      })
    });
  }
}
