import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {
  receta:boolean=false;
  ancho:any;
  number:any;
  movil = false;
  constructor( private _rotuer:Router) { }

  ngOnInit() {
    this.ancho=window.innerWidth;
   
    if(this.ancho<416)
    {
        this.receta=true;
    }

    if (this.number < 416 ) {
      this.movil = true;
    }


  

  
    

  }
  

}
