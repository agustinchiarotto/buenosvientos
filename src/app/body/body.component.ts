import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  movil:boolean = false;
  ancho;
  constructor() { }

  ngOnInit() {
    this.ancho=window.innerWidth;
    if(this.ancho<416){
      this.movil=true
    }
    if(this.ancho<813){
      this.movil=true
    }
  }

}
