import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarProductosComponent } from './components/producto-bar/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/producto-bar/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './components/producto-bar/eliminar-producto/eliminar-producto.component';
import { CrearUsuarioBarComponent } from './components/usuario-bar/usuario/crear-usuario-bar.component';
import { ActualizarProductoComponent } from './components/producto-bar/actualizar-producto/actualizar-producto.component';
import { ObtenerUsuarioBarComponent } from './components/usuario-bar/usuario/obtener-usuario-bar/obtener-usuario-bar.component';
import { ActualizarUsuarioBarComponent } from './components/usuario-bar/usuario/actualizar-usuario-bar/actualizar-usuario-bar.component';
import { EliminarUsuarioBarComponent } from './components/usuario-bar/usuario/eliminar-usuario-bar/eliminar-usuario-bar.component';
import { CrearSedeComponent } from './components/sede-bar/crear-sede/crear-sede.component';
import { ActualizarSedeComponent } from './components/sede-bar/actualizar-sede/actualizar-sede.component';
import { EliminarSedeComponent } from './components/sede-bar/eliminar-sede/eliminar-sede.component';
import { ListarSedeComponent } from './components/sede-bar/listar-sede/listar-sede.component';
import { CrearMesaComponent } from './components/mesas-bar/crear-mesa/crear-mesa.component';
import { ListarMesaComponent } from './components/mesas-bar/listar-mesa/listar-mesa.component';
import { EliminarMesaComponent } from './components/mesas-bar/eliminar-mesa/eliminar-mesa.component';
import { ActualizarMesaComponent } from './components/mesas-bar/actualizar-mesa/actualizar-mesa.component';
import { VistaCajeroComponent } from './components/vista-cajero/vista-cajero.component';
import { VistaMeseroComponent } from './components/vista-mesero/vista-mesero.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ListarProductosComponent,
    CrearProductoComponent,
    ActualizarProductoComponent,
    EliminarProductoComponent,
    CrearUsuarioBarComponent,
    ObtenerUsuarioBarComponent,
    ActualizarUsuarioBarComponent,
    EliminarUsuarioBarComponent,
    CrearSedeComponent,
    ActualizarSedeComponent,
    EliminarSedeComponent,
    ListarSedeComponent,
    CrearMesaComponent,
    ListarMesaComponent,
    EliminarMesaComponent,
    ActualizarMesaComponent,
    VistaCajeroComponent,
    VistaMeseroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
