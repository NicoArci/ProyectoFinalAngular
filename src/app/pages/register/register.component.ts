import { Component } from '@angular/core';
import { EnlacesprincipalesService } from 'src/app/routes/enlacesprincipales.service';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username!:string;
  password!:string;
  name!:string;
  lastname!:string;
  typedocument!:string;
  numdocument!:number;
  email!:string;
  telnumber!:number;
  persontype!:string
  
  constructor( protected enlaceServicios:EnlacesprincipalesService,
    private userService:UserservicesService){}

  createUser():void{
    this.userService.create(this.username, this.email,this.password,this.name, this.lastname,
      this.typedocument,this.numdocument,this.telnumber,this.persontype);
      console.log("Usuario creado",this.username, this.email,this.password,this.name, this.lastname,
      this.typedocument,this.numdocument,this.telnumber,this.persontype );
  }
}
