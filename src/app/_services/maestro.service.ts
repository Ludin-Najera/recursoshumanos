import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { empleados1 } from '../models/empleados';
import { detalleempleados1 } from '../models/detalleempleados';

//const AUTH_API = 'http://localhost:5000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MaestroService {

  constructor() { }
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient){}

  //mostrar todos los empleados
  //getempleados() {
  //  return this.http.get(AUTH_API + 'empleados',httpOptions);
 // }


  getempleados() {
    return this.http.get('http://localhost:5000/empleados', httpOptions);
  }

 // getempleadosinactivos() {
 //   return this.http.get(AUTH_API + 'empleadosinactivos',httpOptions);
 // }
  getempleadosinactivos() {
    return this.http.get('http://localhost:5000/empleadosinactivos');
  }


  //mostrar un empleado
  getempleado(idempleados: string){
    return this.http.get(`http://localhost:5000/empleados/${idempleados}`);
  }

  insertarempleados(empleados: empleados1){
    return this.http.post('http://localhost:5000/empleados', empleados)
  };

  editarempleados(idempleados: string | number, editarempleados: empleados1): Observable<empleados1>{
    return this.http.put(`http://localhost:5000/empleados/${idempleados}`, editarempleados);
  }

  getdetalleempleados(idempleados: string){
    return this.http.get(`http://localhost:5000/detalleempleados/${idempleados}`);
  }
  
  editardetalleempleados(idempleados: string | number, editardetalleempleados: detalleempleados1): Observable<detalleempleados1>{
    return this.http.put(`http://localhost:5000/detalleempleados/${idempleados}`, editardetalleempleados);
  }

}
