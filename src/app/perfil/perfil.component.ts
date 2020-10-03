import { Component, OnInit } from '@angular/core';
import { detalleempleados1 } from '../models/detalleempleados';
import { EmpleadosService } from '../_services/maestro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  detalleempleados: detalleempleados1 ={
    telefono: '',
    direccion: '',
    dpi: '',
    fechaingreso: '',
    vacaciones: '',
    idempleados: 0,
  };

  edit: boolean = false;

  constructor(private empleadosservice: EmpleadosService, private router: Router, private activedroute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedroute.snapshot.params;
    console.log(params);
     if(params.idempleados){
      this.empleadosservice.getdetalleempleados(params.idempleados).subscribe(res=> {
        console.log(res);
        this.detalleempleados = res;
        this.edit = true;
      }, 
      err => console.error(err)
      );
    }

  }

  editar(){
    this.empleadosservice.editardetalleempleados(this.detalleempleados.idempleados, this.detalleempleados).subscribe( res =>{
      console.log(res);
      this.router.navigateByUrl('/maestroempleados');
    },
      err => console.log(err)
    );
  }

  registrar(){

  }

}
