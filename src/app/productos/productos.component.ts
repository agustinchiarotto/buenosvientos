import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  movil = false;
  mostrarDulces = false;
  mostrarNaturales = false;
  mostrarSalados = false;
  dulces = [{
    nombre: 'ALMENDRAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_alm_choco.jpg' ,
    imagen2: '../../assets/imagenes/etiquetas/almendras_chocolate.png',
    imagenCE: '../../assets/imagenes/info_nutri/almendra_con_chocolate.png',
    size: false, // para ver si es 100% o 50%
    mouse: false, // para el mouse over
    click: false, // para ver si ponemos el coso marron o no

  },
  {
    nombre: 'PASAS DE UVA',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_pasas_choco.jpg',
    imagen2: '../../assets/imagenes/etiquetas/pasas_chocolate.png',
    imagenCE: '../../assets/imagenes/info_nutri/pasas_con_chocolate.png',
    size: false,
    mouse: false,
    click: false
  },
  {
    nombre: 'AVELLANAS',
    negrita: 'CON CHOCOLATE',
    imagen: '../../assets/imagenes/productos/dulces_avellana_choco.jpg',
    imagen2: '../../assets/imagenes/etiquetas/avellanas_chocolate.png',
    imagenCE: '../../assets/imagenes/info_nutri/avellanas_con_chocolate.png',
    size: false ,
    mouse: false,
    click: false
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'DULCES',
    imagen: '../../assets/imagenes/productos/dulces_alm_dulces.jpg',
    imagen2: '../../assets/imagenes/etiquetas/almendras_dulces.png',
    imagenCE: '../../assets/imagenes/info_nutri/almendra_dulce.png',
    size: true,
    mouse: false,
    click: false
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'GARRAPIÑADAS',
    imagen: '../../assets/imagenes/productos/dulces_garra.jpg',
    imagen2: '../../assets/imagenes/etiquetas/almendras_garrapinadas.png',
    imagenCE: '../../assets/imagenes/info_nutri/almendra_garra.png',
    size: true,
    mouse: false,
    click: false
  }
];

salados = [{
  nombre: 'ALMENDRAS',
  negrita: 'AHUMADAS',
  imagen: '../../assets/imagenes/productos/saladas_ahumadas.jpg',
  imagen2: '../../assets/imagenes/etiquetas/almendras_ahumadas.png',
  imagenCE: '../../assets/imagenes/info_nutri/almendra_ahumada.png',
  mouse: false,
  click: false
},
{
  nombre: 'ALMENDRAS',
  negrita: 'CON OLIVA',
  imagen: '../../assets/imagenes/productos/saladas_oliva.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_oliva.png',
  imagenCE: '../../assets/imagenes/info_nutri/almendra_oliva.png',
  mouse: false,
  click: false
}, {
  nombre: 'ALMENDRAS',
  negrita: 'PICANTES',
  imagen: '../../assets/imagenes/productos/saladas_pimenton.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_picantes.png',
  imagenCE: '../../assets/imagenes/info_nutri/almendra_picante.png',
  mouse: false,
  click: false
}, {
  nombre: 'ALMENDRAS',
  negrita: 'CON ROMERO',
  imagen: '../../assets/imagenes/productos/saladas_romero.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_romero.png',
  imagenCE: '../../assets/imagenes/info_nutri/almendra_con_romero.png',
  mouse: false,
  click: false
}, {
  nombre: 'ALMENDRAS',
  negrita: 'TOSTADAS',
  imagen: '../../assets/imagenes/productos/saladas_tostadas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_tostadas.png',
  imagenCE: '../../assets/imagenes/info_nutri/almendra_tostada_sal.png',
  mouse: false,
  click: false
}, {
  nombre: 'ALMENDRAS',
  negrita: 'CON WASABI',
  imagen: '../../assets/imagenes/productos/saladas_wasabi.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/almendras_wasabi.png',
  imagenCE: '../../assets/imagenes/info_nutri/almendra_con_wasabi.png',
  mouse: false,
  click: false
},
];

naturales = [

  {
    nombre: 'ALMENDRAS',
    negrita: 'ENTERAS',
    imagen: '../../assets/imagenes/productos/naturales_almendras_enteras.jpg' ,
    imagen2: '../../assets/imagenes/etiquetas/almendras_enteras.png',
    imagenCE: '../../assets/imagenes/info_nutri/almendra.png',
    mouse: false,
    click: false
  },
  {
    nombre: 'ALMENDRAS',
    negrita: 'TOSTADAS SIN SALAR',
    imagen: '../../assets/imagenes/productos/naturales_tostadas_sin_salar.jpg' ,
    imagen2: '../../assets/imagenes/etiquetas/almendras_tostadas_sin_salar.png',
    imagenCE: '../../assets/imagenes/info_nutri/almendra_tostada.png',
    mouse: false,
    click: false
  },

  {
    nombre: 'NUECES',
    negrita: '',
    imagen: '../../assets/imagenes/productos/naturales_nueces.jpg' ,
    imagen2: '../../assets/imagenes/etiquetas/nueces_mariposa.png',
    imagenCE: '../../assets/imagenes/info_nutri/nuez.png',
    mouse: false,
    click: false
  },
  {
  nombre: 'AVELLANAS',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_avellanas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/AVELLANAS.png',
  imagenCE: '../../assets/imagenes/info_nutri/avellanas.png',
  mouse: false,
  click: false
},
{
  nombre: 'MIX',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_mix.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/mix.png',
  imagenCE: '../../assets/imagenes/info_nutri/mix_01.png',
  mouse: false,
  click: false
},
{
  nombre: 'PASAS',
  negrita: '',
  imagen: '../../assets/imagenes/productos/naturales_pasas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/pasas.png',
  imagenCE: '../../assets/imagenes/info_nutri/pasas.png',
  mouse: false,
  click: false
},
{
  nombre: 'ALMENDRAS',
  negrita: 'FILETEADAS',
  imagen: '../../assets/imagenes/productos/naturales_alm_fileteadas.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/fileteadas.png',
  imagenCE: '../../assets/imagenes/info_nutri/almendra_fileteadas.png',
  mouse: false,
  click: false
},


{
  nombre: 'HARINA',
  negrita: 'HARINA CON PIEL',
  imagen: '../../assets/imagenes/productos/naturales_harina01.jpg',
  imagen2: '../../assets/imagenes/etiquetas/etiquetas_harinas_1.png',
  imagenCE: '../../assets/imagenes/info_nutri/harina_000.png',
  mouse: false,
  click: false
},
{
  nombre: 'HARINA',
  negrita: 'HARINA SIN PIEL',
  imagen: '../../assets/imagenes/productos/naturales_harina_02.jpg' ,
  imagen2: '../../assets/imagenes/etiquetas/etiquetas_harina2.png',
  imagenCE: '../../assets/imagenes/info_nutri/harina_0000.png',
  mouse: false,
  click: false
}
];

  ngOnInit() {

    if (window.innerWidth < 416) {
      this.movil = true;
    }

  }



mouseEnter(producto: any) {
  if (!this.movil) {

producto.mouse = true;

this.cambiarImagen(producto);
  }
}

mouseLeave(producto: any) {

  if (!this.movil) {
  this.devolverImagen(producto);
  producto.mouse = false;

  }
  }

 cambiarImagen(producto: any) {
   const aux = producto.imagen;
   producto.imagen = producto.imagen2;
   producto.imagen2 = aux;

 }

devolverImagen(producto: any) {
  const aux = producto.imagen;
  producto.imagen = producto.imagen2;
  producto.imagen2 = aux;

 }


 onclickDulce(producto: any) {
   if (!this.movil) {
  this.cambiarImagen(producto);
   this.mostrarDulces = true;
   producto.click = true;
  }
 }
 onclickSalado(producto: any) {
  if (!this.movil) {
  this.cambiarImagen(producto);

   this.mostrarSalados = true;
   producto.click = true;
  }
 }
 onclickNaturales(producto: any) {

  if (!this.movil) {
  this.cambiarImagen(producto);

   this.mostrarNaturales = true;
   producto.click = true;
   producto.mouse = false;
  }
 }

 cerrarMarron() {

  for (let i = 0; i < this.dulces.length; i++) {
    this.dulces[i].click = false;
  }
  for (let i = 0; i < this.salados.length; i++) {

    this.salados[i].click = false;
  }
  for (let i = 0; i < this.naturales.length; i++) {

    this.naturales[i].click = false;
  }

   this.mostrarDulces = false;
   this.mostrarNaturales = false;
   this.mostrarSalados = false;
 }

 estilo(i: number) {
   let r = '';
    if (i === 3) {
      r = '{margin-left:15%}';
   }
   if (i === 4) {
    r = '{margin-rigth:15%}';
 }

   return r;
 }


}
