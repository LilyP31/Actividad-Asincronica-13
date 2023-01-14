import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css'],
})
export class MonedaComponent {

 registro :any;
  constructor(private formBuilder: FormBuilder) {
    this.registro = this.formBuilder.group({
      valor: ['', Validators.required],
      moneda: ['', Validators.required]
    });
 }
    



 /*
  constructor(private formBuilder : FormBuilder){ }

   registro = this.formBuilder.group({
    valor: ['', Validators.required],
    selectedCurrency: ['',Validators.required],
    
   
   })
  
   // Generar un metodo get para cada campo del formulario reactivo
   get valor(){ return this.registro.get('valor');}
    get selectedCurrency(){ return this.registro.get('selectedCurrency');}*/
   
   

    
}

