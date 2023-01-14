import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MonedaComponent } from './moneda/moneda.component';

 // Configurar zona geografica 
 import { LOCALE_ID } from '@angular/core';
 import localeES from '@angular/common/locales/es-PE';
 import { registerLocaleData } from '@angular/common';
import { ActividadComponent } from './actividad/actividad.component';
 registerLocaleData(localeES, 'es-PE')

@NgModule({
  declarations: [
    PipesComponent,
    MonedaComponent,
    ActividadComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    PipesComponent,
    MonedaComponent,
    ActividadComponent
  ],
  providers:[{provide: LOCALE_ID, useValue: 'es-PE'}]
})
export class RetoModule { }
