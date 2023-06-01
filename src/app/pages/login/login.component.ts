import { Component } from '@angular/core';
import { EnlacesprincipalesService } from 'src/app/routes/enlacesprincipales.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( public enlaceServicios:EnlacesprincipalesService){}

}
