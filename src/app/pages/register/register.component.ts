import { Component } from '@angular/core';
import { EnlacesprincipalesService } from 'src/app/routes/enlacesprincipales.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor( protected enlaceServicios:EnlacesprincipalesService){}
}
