import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { map, catchError, tap } from 'rxjs/operators';
import { Persona } from '../estudiantes/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
    
  constructor() {
  }
  get(): Observable<Persona[]> {
    let personas: Persona[] = [];
   personas=JSON.parse(localStorage.getItem('datos') || '{}');
    return of(personas).pipe(
      catchError(error=>{
        console.log('error al consultar')
        return of(personas)
      })
    )
  }

  post(persona: Persona): Observable<Persona> {
    let personas: Persona[] = [];
    let storageDatos = localStorage.getItem('datos');
    if (storageDatos != null) {
      personas = JSON.parse(storageDatos)
    }
    personas.push(persona);
    localStorage.setItem('datos', JSON.stringify(personas));
    return of(persona).pipe(
      catchError(error=>{
        alert('error al registrar')
        return of(persona)
      })
    )
    
  }

}
