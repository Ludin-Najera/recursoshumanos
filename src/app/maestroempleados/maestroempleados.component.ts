import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { EmpleadosService } from '../_services/inicio.service';
import { empleados1 } from '../models/empleados';

@Component({
  selector: 'app-maestroempleados',
  templateUrl: './maestroempleados.component.html',
  styleUrls: ['./maestroempleados.component.css']
})
export class MaestroempleadosComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  empleados: any = [];

  constructor(private empleadosservice: EmpleadosService) { }

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar(){
    this.empleadosservice.getempleados().subscribe(
      res => {
        this.empleados = res;
      },
        
      err => console.error(err)
    );
  }



}
