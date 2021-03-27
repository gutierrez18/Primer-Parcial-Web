export class Persona {
    identificacion:string;
    primerNombre:string;
    primerApellido:string;
    grupoSisben:string;
    valorMatricula:number;

    constructor(){
        this.identificacion = "";
        this.primerNombre = "";
        this.primerApellido="";
        this.grupoSisben = "";
        this.valorMatricula = 0;
    }

    calcularSubcidio(){
      if(this.grupoSisben == "A" || this.grupoSisben == "B"){
      this.valorMatricula = 0;
      alert('se ha descontado el 100% de su matricula')
      }

      if(this.grupoSisben == "C"){
        this.valorMatricula = this.valorMatricula - this.valorMatricula*0.6;
        alert('se ha descontado el 60% de su matricula');

      }

      if(this.grupoSisben == "D"){

        alert('no ha sido beneficiado en el descuento de matricula');

      }

    }
}

