import { Component } from '@angular/core';
import { EnlacesprincipalesService } from 'src/app/routes/enlacesprincipales.service';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = "";
  password:string = "";

  constructor( private userservice: UserservicesService,
    protected enlaceServicios:EnlacesprincipalesService
    ){}
  
  loginComp(){
    this.userservice.loginUser(this.email,this.password)
    //verificar el funcionamiento
    console.log("Email: " +this.email)
    console.log("password: " + this.password)
  }

}
