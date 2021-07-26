import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Mail } from './mail';



@Injectable()
export class ContactoService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private contactoURL = "http://www.buenosvientos.com.ar"+"/contacto:4000";  // URL a la api

    constructor(
        private http: Http,
        
    ) { }

   
    enviarMail(
        nombreC: string,
        apellidoC: string,
        emailC: string,
        telefonoC: string,
        localidadC: string,
        mensajeC: string){
        console.log("URL CONSOLE: ",this.contactoURL)
        return this.http.post(this.contactoURL,
            JSON.stringify({
                nombre: nombreC, apellido: apellidoC,
                email: emailC, telefono: telefonoC,localidad: localidadC,
                mensaje: mensajeC
            }), { headers: this.headers }).toPromise()
            .then(response => response.json().obj as Mail)
            .catch(this.handleError);
    }
    handleError(error: any) {
        console.log(error);
    }

   
}
