import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseGetUser } from 'src/app/model/response.getUser';
import { UserService } from 'src/app/service/api/user.service';

@Component({
  selector: 'app-obtener-usuario-bar',
  templateUrl: './obtener-usuario-bar.component.html',
  styleUrls: ['./obtener-usuario-bar.component.scss']
})
export class ObtenerUsuarioBarComponent {
  user: any = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  navegarAMenu() {
    this.router.navigate(['/admin-products']); // Reemplaza '/admin-products' con la ruta que desees
  }

  obtenerUsuarios() {
    let responseGetUser: ResponseGetUser;

    this.userService.obtenerUsuario().subscribe(
      data => {
        console.log('--->', data);
        this.user = data.data;
      },
      error => {
        console.error('Error al obtener la lista de productos:', error);
      }
    );
  }
}
