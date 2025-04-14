import { Component, inject } from '@angular/core';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-injecao-dependencia',
  standalone: true,
  imports: [],
  templateUrl: './injecao-dependencia.component.html',
  styleUrl: './injecao-dependencia.component.css'
})
export class InjecaoDependenciaComponent {

  constructor(protected generalService: GeneralService) { }
  //ou podemos injetar o serviço de uma outra forma

  generalService2 = inject (GeneralService); // instância do serviço

}
