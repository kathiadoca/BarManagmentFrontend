import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/api/user.service';

@Component({
  selector: 'app-eliminar-usuario-bar',
  templateUrl: './eliminar-usuario-bar.component.html',
  styleUrls: ['./eliminar-usuario-bar.component.scss']
})
export class EliminarUsuarioBarComponent {

  constructor(private userService: UserService, private router: Router,) { }
  usuario: string = '';

  eliminandoUsuario(id: string) {
    this.userService.eliminarProducto(this.usuario).subscribe(
      data => {
        console.log('--->', data);
        this.usuario = '';
      },
      error => {
        console.error('Error al obtener la lista de productos:', error);
      }
    );
  }

  navegarAMenu() {
    this.router.navigate(['/admin-products']);
  }
}
