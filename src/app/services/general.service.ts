import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})
export class GeneralService {

  constructor() { }

  formatCGC(cgc: string): string {
    
    const value = cgc.replace(/\D/g, '');

    if (!value || value.length < 11) {
      // CPF inválido, exibe um alerta
      alert('CPF inválido!');
      return value;

    } else if (!value || value.length === 11) {

      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    } else if (!value || value.length !== 14) {
      // CNPJ inválido, exibe um alerta
      alert('CNPJ inválido!');
      return value;

    } else {
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    

  }
  

}
