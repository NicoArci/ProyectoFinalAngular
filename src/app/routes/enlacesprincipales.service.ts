import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EnlacesprincipalesService {

  constructor(private router:Router) { }
  redireccionPaginaLog(){
    this.router.navigate(['/'])
  }

  redireccionNosotros(){
    this.router.navigate(['nosotros']);
      }

  redireccionMision(){
    this.router.navigate(['mision']);
}
  redireccionVision(){
    this.router.navigate(['vision']);
  }

  redireccionTienda(){
    this.router.navigate(['tienda']);
  }

  redireccionLogin(){
    this.router.navigate(['login']);
  }

  redireccionRegister(){
    this.router.navigate(['register']);
  }
}
