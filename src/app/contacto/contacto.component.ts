import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactoService } from "./contacto.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {


  model: any = {};
  conta:boolean=false;
  ancho:any;

  constructor(
    private contactoService:ContactoService
  ) { 
    
  }

  ngOnInit() {

    this.ancho=window.innerWidth;
    
    
    if(this.ancho<416)
    {
      this.conta=true;
    }
  }



  enviarMail(f: NgForm){
    this.contactoService.enviarMail(this.model.nombre,this.model.apellido,this.model.email,this.model.tel,this.model.localidad,this.model.mensaje)

    Swal.fire({
      title: '¡Muchas Gracias!',
      text: 'Se ha enviado un mensaje. Pronto nos contactaremos con vos',
      type: 'success',
      showConfirmButton: false,
      timer: 3200
    });

    f.resetForm();

  }

}
