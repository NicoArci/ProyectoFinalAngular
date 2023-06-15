import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  userProfile!:any;

  constructor(private UserService: UserservicesService){}

  ngOnInit(){
    this.getUser();
  }

  getUser(){
    this.UserService.getUser()
    .subscribe((response:any) => {
      // console.log("response ", response)
      this.userProfile = response;
    },
    (error) =>{
      console.log("error: ", error)
    })
  }
}
