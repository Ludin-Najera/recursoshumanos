import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { empleados1 } from '../models/empleados';

const AUTH_API = 'http://localhost:5000/';

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
  getempleados() {

    return this.http.get(AUTH_API + 'empleados',httpOptions);
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


}
