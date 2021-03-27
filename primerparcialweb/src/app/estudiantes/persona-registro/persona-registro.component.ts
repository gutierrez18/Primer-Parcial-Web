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
  constructor(private personaService:PersonaService) {
    this.persona = new  Persona(); }

  ngOnInit(): void {
    
    
  }
  add() {
      this.personaService.post(this.persona);
      alert('se ha guardado con exito');
  }
}
