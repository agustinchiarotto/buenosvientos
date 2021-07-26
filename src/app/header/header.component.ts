import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [

    trigger('hamburTrigger', [
      // ...
      state('armado', style({

        opacity: 0.8,

      })),
      state('normal', style({

        opacity: 1,

      })),
      transition('armado => normal', [
        animate('0.5s')
      ]),
      transition('normal => armado', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  model: any = {};
  prevScrollpos = window.pageYOffset;
  hamburguesa = false;
  david = false;
  armado = false;
  hizoClick = false;
  movil = false;
  ruta = 'assets/imagenes/logoChico.png';
  constructor(@Inject(DOCUMENT) document) {

 }
  ngOnInit() {
    this.hamburguesa = false;
    const number = window.innerWidth;

    if (number > 1650) {
      this.david = true;
    }

    if (number < 850 ) {
      this.movil = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hizoClick = true;
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number <= 150 ) {
        this.hamburguesa = false;

        this.ruta = 'assets/imagenes/logoChico.png';
      //  console.log(this.hamburguesa)
    }
    if (number > 150) {
      this.hamburguesa = true;
      // tslint:disable-next-line:comment-format
      this.ruta = 'assets/imagenes/logoChico.png'; //Esta ruta esta por si hay que cambiar la imagen del logo al bajar
      // console.log('You are 100px from the top to bottom ' + this.hamburguesa);


    }
    document.getElementById('navbarSupportedContent').classList.remove('show');
  }

  mouseEnter() {
    this.armado = false;
  }
  mouseLeave() {
    this.armado = true;
  }

buscar() {
//  console.log(this.model.busqueda);
  window.location.href = 'http://www.google.com/search?q=site:buenosvientos.com.ar ' + this.model.busqueda;
}

}
