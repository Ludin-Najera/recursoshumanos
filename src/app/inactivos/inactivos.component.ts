import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { EmpleadosService } from '../_services/maestro.service';
import { empleados1 } from '../models/empleados';


@Component({
  selector: 'app-inactivos',
  templateUrl: './inactivos.component.html',
  styleUrls: ['./inactivos.component.css']
})
export class InactivosComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  empleados: any = [];

  constructor(private empleadosservice: EmpleadosService) { }

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar(){
    this.empleadosservice.getempleadosinactivos().subscribe(
      res => {
        this.empleados = res;
      },
        
      err => console.error(err)
    );
  }

  editarempleados(id: string){
    console.log(id);
  }

  


}
