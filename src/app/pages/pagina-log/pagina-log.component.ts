import { Component } from '@angular/core';
import { EnlacesprincipalesService } from 'src/app/routes/enlacesprincipales.service';

@Component({
  selector: 'app-pagina-log',
  templateUrl: './pagina-log.component.html',
  styleUrls: ['./pagina-log.component.css']
})
export class PaginaLogComponent {
  constructor( public enlaceServicios:EnlacesprincipalesService){}
  
}
