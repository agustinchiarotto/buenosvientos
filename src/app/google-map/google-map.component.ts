import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  constructor() { }
  mapa:boolean=false;
  ancho:any;
  celular:boolean = false;

  ngOnInit() {

    this.ancho=window.innerWidth;
    
    if(this.ancho<416)
    {
      this.mapa=true;
      this.celular=true;
    }
  }
  

  title: string = 'My first AGM project';
  lat: number = -38.9411626;
  lng: number = -68.1504201;
  zoom:number = 5;

}
