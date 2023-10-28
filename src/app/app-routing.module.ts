import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AdminProductComponent } from './components/producto-bar/admin-order.component';
import { ListarProductosComponent } from './components/producto-bar/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/producto-bar/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/producto-bar/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/producto-bar/eliminar-producto/eliminar-producto.component';
import { CrearUsuarioBarComponent } from './components/usuario-bar/usuario/crear-usuario-bar.component';
import { ObtenerUsuarioBarComponent } from './components/usuario-bar/usuario/obtener-usuario-bar/obtener-usuario-bar.component';
import { ActualizarUsuarioBarComponent } from './components/usuario-bar/usuario/actualizar-usuario-bar/actualizar-usuario-bar.component';
import { EliminarUsuarioBarComponent } from './components/usuario-bar/usuario/eliminar-usuario-bar/eliminar-usuario-bar.component';
import { CrearSedeComponent } from './components/sede-bar/crear-sede/crear-sede.component';
import { ListarSedeComponent } from './components/sede-bar/listar-sede/listar-sede.component';
import { ActualizarSedeComponent } from './components/sede-bar/actualizar-sede/actualizar-sede.component';
import { EliminarSedeComponent } from './components/sede-bar/eliminar-sede/eliminar-sede.component';
import { CrearMesaComponent } from './components/mesas-bar/crear-mesa/crear-mesa.component';
import { ListarMesaComponent } from './components/mesas-bar/listar-mesa/listar-mesa.component';
import { EliminarMesaComponent } from './components/mesas-bar/eliminar-mesa/eliminar-mesa.component';
import { ActualizarMesaComponent } from './components/mesas-bar/actualizar-mesa/actualizar-mesa.component';

//Rutas de navegacion
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: CreateUserComponent },
  { path: 'admin-products', component: AdminProductComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'actualizar-producto', component: ActualizarProductoComponent },
  { path: 'eliminar-producto', component: EliminarProductoComponent },
  { path: 'crear-usuario-bar', component: CrearUsuarioBarComponent },
  { path: 'obtener-usuario-bar', component: ObtenerUsuarioBarComponent },
  { path: 'actualizar-usuario-bar', component: ActualizarUsuarioBarComponent },
  { path: 'eliminar-usuario-bar', component: EliminarUsuarioBarComponent },
  { path: 'crear-sede-bar', component: CrearSedeComponent },
  { path: 'listar-sede-bar', component: ListarSedeComponent },
  { path: 'actualizar-sede-bar', component: ActualizarSedeComponent },
  { path: 'eliminar-sede-bar', component: EliminarSedeComponent },
  { path: 'crear-mesa-bar', component: CrearMesaComponent },
  { path: 'listar-mesa-bar', component: ListarMesaComponent },
  { path: 'eliminar-mesa-bar', component: EliminarMesaComponent },
  { path: 'actualizar-mesa-bar', component: ActualizarMesaComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
