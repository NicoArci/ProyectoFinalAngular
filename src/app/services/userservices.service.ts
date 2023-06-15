import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http'
import { EnlacesprincipalesService } from '../routes/enlacesprincipales.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  private userEmail!:string;
  private apiUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient,
    private router: Router) { }
  //Login conexion API
  loginUser(email:string, password:string):void{
    const loginUrl = `${this.apiUrl}/login`; //Url para conectar el login de la API
    const formData = {
      email: email,
      password: password
    };
    this.http.post(loginUrl,formData,{headers:this.getAuthHeaders()})
    .subscribe(
      (response: any) => {
        localStorage.setItem("token", response.token)
        // console.log("respuesta: ", response)
        this.userEmail = formData.email;
        this.router.navigate(['/perfil'])
        // alert("Inicio de sesion Exitoso");
      },
      (error) =>{
        if(error instanceof HttpErrorResponse){
          if(error.error instanceof ErrorEvent){
            console.log("Error: ", error.error.message)
          }
        }else{
          console.error(`codigo de error ${error.status}` + `mensaje: ${error.error}`)
        }
      }
      
    )
  }


  getUser(){
    const getUserUrl = `${this.apiUrl}/${this.userEmail}`;
    return this.http.get(getUserUrl);
  }



  //Funcion para realizar las diferentes validaciones de los controladores
  private getAuthHeaders():HttpHeaders{
    const authToken = localStorage.getItem("token");
    const headers = new HttpHeaders(
      {"Authorization": `Bearer ${authToken}`}
    );
    return headers; 
  }
}

