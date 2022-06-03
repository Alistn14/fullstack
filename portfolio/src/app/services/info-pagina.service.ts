import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {}; 
  //info: any = {}; //No deberia usarse any
  cargada = false;
  equipo: any=[];

  constructor( private http: HttpClient) { 

    this.cargarInfo();
    this.cargarEquipo();
    // Prueba de donde aparece

      }
  
  // Métodos
  private cargarInfo()  { 
    // Leer archivo de JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( resp => {

      this.cargada = true;
      this.info = resp;
      
    })
  }
  // Leer archivo de JSON de Firebase
  private cargarEquipo()  { 
    // Leer archivo de JSON
    this.http.get('https://portfolio-angular-html-db-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe( resp => {

      this.equipo = resp;
      console.log(resp);
  

    })
}
}