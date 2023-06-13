import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PaginaLogComponent } from './pages/pagina-log/pagina-log.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { VisionComponent } from './pages/vision/vision.component';
import {MisionComponent } from './pages/mision/mision.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PaginaLogComponent,
    TiendaComponent,
    NavbarComponent,
    NosotrosComponent,
    VisionComponent,
    MisionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
