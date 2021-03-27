import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona: Persona;
  personas: Persona[] = [];
  constructor(private personaService:PersonaService) {
    this.persona = new  Persona(); }

  ngOnInit(): void {


  }


  add() {
     if( this.persona.identificacion != "" && this.persona.primerNombre != "" && this.persona.primerApellido != "" && this.persona.grupoSisben != "" && this.persona.valorMatricula != 0) {
       console.log(this.ExistenciaEstudiante());
      if(this.ExistenciaEstudiante()){
        alert('el estudante ya se encuentra registrado');
      }
      else{
        this.persona.calcularSubcidio();
        this.personaService.post(this.persona);
        alert('se ha guardado con exito');
      }
    }

    else{
      alert('no puede registrar campos vacios')
    }

  }

  ExistenciaEstudiante(){
    var bandera=false;
    this.personaService.get ();
    for(var i=0; i<this.personas.length; i++){
       if(this.persona.identificacion == this.personas[i].identificacion){
          bandera=true;
       }
    }
    return bandera;

  }

  
}
