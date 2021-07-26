import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-recetasNuevo',
  templateUrl: './recetasNuevo.component.html',
  styleUrls: ['./recetasNuevo.component.scss']
})
export class RecetasNuevoComponent implements OnInit {
  receta:boolean=false;
  hamburguesa = false;
  armado = false;
  movil = false;
  ancho:any;
  ruta = 'assets/imagenes/logoChico.png';



  
  //ingredientes - sabores
  dulce = false;
  salado = false;
  natural = false;
  almendras = false;
  avellanas = false;
  nueces = false;
  pasas = false;
  harina = false;
  todas = false;
  recetas = [{
    nombre: 'Bizcocho de almendras y crema',
    imagen: '../../assets/imagenes/recetas/icono_biscocho.png' ,
    ruta: '../../assets/imagenes/recetas/receta_bizcocho_almendra.pdf',
    duracion:'70 min',
    dificultad:'Dificil',
    mostrar:true, //varia segun el checkbox 
    dulce:true,
    salado:false,
    natural:false,
    almendras:true,
    avellanas:false,
    nueces:false,
    pasas:false,
    harina:false,
  },
  {
    nombre: 'Carré de cerdo con pesto de nueces',
    imagen: '../../assets/imagenes/recetas/icono_carre.png' ,
    ruta: '../../assets/imagenes/recetas/recetas_carre.pdf',
    duracion:'50 min',
    dificultad:'Media',
    mostrar:true, //varia segun el checkbox 
    dulce:false,
    salado:true,
    natural:false,
    almendras:false,
    avellanas:false,
    nueces:true,
    pasas:false,
    harina:false,
  },
  {
    nombre: 'Galletas de queso y avellanas',
    imagen: '../../assets/imagenes/recetas/icono_galleta_queso.png' ,
    ruta: '../../assets/imagenes/recetas/recetas_galleta_queso.pdf',
    duracion:'70 min',
    dificultad:'Dificil',
    mostrar:true, //varia segun el checkbox 
    dulce:false,
    salado:true,
    natural:false,
    almendras:false,
    avellanas:true,
    nueces:false,
    pasas:false,
    harina:false,
  },
  {
    nombre: 'Galletas de avellanas sin tacc', 
    imagen: '../../assets/imagenes/recetas/icono_galleta_sintac.png' ,
    ruta: '../../assets/imagenes/recetas/receta_galleta_sintac.pdf',
    duracion:'60 min',
    dificultad:'Fácil',
    mostrar:true, //varia segun el checkbox 
    dulce:false,
    salado:false,
    natural:true,
    almendras:false,
    avellanas:true,
    nueces:false,
    pasas:false,
    harina:false,
  },
  {
    nombre: 'Nutella de avellanas',
    imagen: '../../assets/imagenes/recetas/icono_nutela.png' ,
    ruta: '../../assets/imagenes/recetas/receta_nutella.pdf',
    duracion:'70 min',
    dificultad:'Dificil',
    mostrar:true, //varia segun el checkbox 
    dulce:true,
    salado:false,
    natural:false,
    almendras:false,
    avellanas:true,
    nueces:false,
    pasas:false,
    harina:false,
  },
  {
    nombre: 'Pan de nueces y trigo',
    imagen: '../../assets/imagenes/recetas/icono_pan.png' ,
    ruta: '../../assets/imagenes/recetas/receta_pan.pdf',
    duracion:'60 min',
    dificultad:'Fácil',
    mostrar:true, //varia segun el checkbox 
    dulce:false,
    salado:false,
    natural:true,
    almendras:false,
    avellanas:false,
    nueces:true,
    pasas:false,
    harina:false,
  },
  {
    nombre: 'Souffle de almendras',
    imagen: '../../assets/imagenes/recetas/icono_sufle.png' ,
    ruta: '../../assets/imagenes/recetas/receta_sufle.pdf',
    duracion:'45 min',
    dificultad:'Media',
    mostrar:true, //varia segun el checkbox 
    dulce:false,
    salado:false,
    natural:true,
    almendras:true,
    avellanas:false,
    nueces:false,
    pasas:false,
    harina:false,
  },
  {
    nombre: 'Tarta de duraznos y cerezas con streusel',
    imagen: '../../assets/imagenes/recetas/icono_tarta_manzana.png' ,
    ruta: '../../assets/imagenes/recetas/receta_tarta_manzana.pdf',
    duracion:'70 min',
    dificultad:'Dificil',
    mostrar:true, //varia segun el checkbox 
    dulce:true,
    salado:false,
    natural:false,
    almendras:false,
    avellanas:false,
    nueces:true,
    pasas:false,
    harina:false,
  },
  {
    nombre: 'Crema de remolacha, zanahoria y almendras',
    imagen: '../../assets/imagenes/recetas/icono_remolacha.png' ,
    ruta: '../../assets/imagenes/recetas/recetas_remolacha.pdf',
    duracion:'50 min',
    dificultad:'Media',
    mostrar:true, //varia segun el checkbox 
    dulce:false,
    salado:true,
    natural:false,
    almendras:true,
    avellanas:false,
    nueces:false,
    pasas:false,
    harina:false,
  },
 ];




  constructor(
    private activatedRoute:ActivatedRoute, private rotuer:Router) { }

  ngOnInit() {
    this.hamburguesa = false;
    const number = window.innerWidth;

    if (number < 380 ) {
      this.movil = true;
    }

  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
 }

  @HostListener('window:scroll', [])
  onWindowScroll() {

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
   // document.getElementById('navbarSupportedContent').classList.remove('show');
  }


  click(){
    this.recetas.forEach((receta)=> {
      receta.mostrar=false;
    }
    );

    if(this.dulce){
      this.recetas.forEach((receta)=> {
        if(receta.dulce){
            receta.mostrar=true;
        }
      }
      );
    }
    if(this.salado){
      this.recetas.forEach((receta)=> {
        if(receta.salado){
            receta.mostrar=true;
        }
      }
      );
      
    }
    if(this.natural){
      this.recetas.forEach((receta)=> {
        if(receta.natural){
            receta.mostrar=true;
        }
      }
      );
    }
    if(this.avellanas){
      this.recetas.forEach((receta)=> {
        if(receta.avellanas){
            receta.mostrar=true;
        }
      }
      );
      
    }
    if(this.almendras){
      this.recetas.forEach((receta)=> {
        if(receta.almendras){
            receta.mostrar=true;
        }
      }
      );
    }
    if(this.nueces){
      this.recetas.forEach((receta)=> {
        if(receta.nueces){
            receta.mostrar=true;
        }
      }
      );
    }
    if(this.harina){
      this.recetas.forEach((receta)=> {
        if(receta.harina){
            receta.mostrar=true;
        }
      }
      );
    }
    if(this.pasas){
      this.recetas.forEach((receta)=> {
        if(receta.pasas){
            receta.mostrar=true;
        }
      }
      );
    }
    if(this.todas){
      this.recetas.forEach((receta)=> {
        receta.mostrar=true;
      }
      );


    }
  
  }
  

}
