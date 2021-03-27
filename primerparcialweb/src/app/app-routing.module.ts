import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaConsultaComponent } from './estudiantes/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './estudiantes/persona-registro/persona-registro.component';

const routes: Routes = [
{
  path: 'personaConsulta',
component: PersonaConsultaComponent

},

{
  path: 'personaRegistro',
  component: PersonaRegistroComponent
  }

  

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
