import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
value: string | number | undefined;
currencyCode: string|undefined;

  // Crear atributo de tipo FormBuilder
  constructor(private formBuilder : FormBuilder){ }
   registro = this.formBuilder.group({

    valor: ['', Validators.required],
   })
  
   // Generar un metodo get para cada campo del formulario reactivo
   get valor(){ return this.registro.get('valor');}

}
