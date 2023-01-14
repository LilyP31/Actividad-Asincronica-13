import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent {

  
  data = [{
    Apellido: 'Arcilla',
    Casado: false,
    Direccion: "Calle 35 # 43 28",
    Nombre: "Diego",
    Telefono: 3859720,
    Ciudad: 'Bogota'
  },

  {Apellido: 'Bueno',
  Casado: false,
  Direccion: "CR 16A # 53 28",
  Nombre: "Kevin",
  Telefono: 3831799954,
  Ciudad: 'Argentina'

  },

  {Apellido: 'Palomino',
  Casado: false,
  Direccion: "CR 25 # 52 33",
  Nombre: "Natalia",
  Telefono: 32255945555,
  Ciudad: 'Brasil'}
];
  
}
