import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { empleados1 } from '../models/empleados';

//empleados

@Injectable({
    providedIn: 'root'
  })
  export class EmpleadosService {
  
    constructor(private http: HttpClient){}
  
    insertarempleados(empleados: empleados1){
      return this.http.post('http://localhost:5000/empleados', empleados)
    };
  
    eliminarempleados(idempleados: string){
      return this.http.delete(`http://localhost:5000/empleados${idempleados}`)
      
    }
  
    editarempleados(idempleados: string | number, editarempleados: empleados1): Observable<empleados1>{
      return this.http.put(`http://localhost:5000/empleados${idempleados}`, editarempleados);
    }
  
    //mostrar todos los empleados
    getempleados() {
  
      return this.http.get('http://localhost:5000/empleados')
    }
  
    //mostrar un empleado
    getempleado(idempleados: string){
      return this.http.get(`http://localhost:5000/empleados${idempleados}`);
    }
  
  }