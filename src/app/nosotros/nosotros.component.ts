import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
  animations: [

    trigger('triger', [
      // ...
      state('none', style({

        display:'none',

      })),
      state('flex', style({

        display: 'flex',

      })),
      transition('none => flex', [
        animate('0.5s')
      ]),
      transition('flex => none', [
        animate('0.5s')
      ]),
    ]),
    trigger('up', [
      // ...
      state('none', style({

        display:'none',

      })),
      state('flex', style({

        display: 'flex',

      })),
      transition('none => flex', [
        animate('0.7s')
      ]),
      transition('flex => none', [
        animate('0.7s')
      ]),
    ]),
  ]


})
export class NosotrosComponent implements OnInit {

  movil = false;
  ancho: any;
  historia = false;
  compromiso = false;
  tecnologia = false;
  calidad = false;
  click = false;

  constructor() { }

  ngOnInit() {

    this.ancho = window.innerWidth;
    if (this.ancho < 416) {
        this.movil = true;
    }
  }

  onclickHistoria() {
    this.historia=true;
    this.tecnologia=false;
    this.calidad=false;
    this.compromiso=false;
  }

  onclickCompromiso() {
    this.compromiso=true;
    this.historia=false;
    this.tecnologia=false;
    this.calidad=false;
    
  }

  onclickTecnologia() {
    this.tecnologia=true;
    this.historia=false;
    this.calidad=false;
    this.compromiso=false;
  }

  onclickCalidad() {
    this.historia=false;
    this.tecnologia=false;
    this.calidad=true;
    this.compromiso=false;
  }

  clickearon(){
    this.click = true;
  }


}
