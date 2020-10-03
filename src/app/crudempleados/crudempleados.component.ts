import { Component, OnInit } from '@angular/core';
import { empleados1 } from '../models/empleados';
import { EmpleadosService } from '../_services/maestro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-crudempleados',
  templateUrl: './crudempleados.component.html',
  styleUrls: ['./crudempleados.component.css']
})
export class CrudempleadosComponent implements OnInit {

  empleados: empleados1 ={
    idempleados: 0,
    nombres: '',
    apellidos: '',
    puesto: '',
    estado: '',
  };

  edit: boolean = false;

  constructor(private empleadosservice: EmpleadosService, private router: Router, private activedroute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedroute.snapshot.params;
    console.log(params);
     if(params.idcomplementos){
      this.empleadosservice.getempleado(params.idempleado).subscribe(res=> {
        console.log(res);
        this.empleados = res;
        this.edit = true;
      }, 
      err => console.error(err)
      );
    }
  }

  registrar(){
    delete this.empleados.idempleados;

    this.empleadosservice.insertarempleados(this.empleados).subscribe(res=> {
      console.log(res);
      this.router.navigateByUrl('/maestroempleados');
    },
      err=> console.error(err)
    );
  }

  editar(){
    this.empleadosservice.editarempleados(this.empleados.idempleados, this.empleados).subscribe( res =>{
      console.log(res);
      this.router.navigateByUrl('/maestroempleados');
    },
      err => console.log(err)
    );
  }



}
