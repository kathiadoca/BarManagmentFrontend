import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from 'src/app/service/api/site.service';

@Component({
  selector: 'app-eliminar-sede',
  templateUrl: './eliminar-sede.component.html',
  styleUrls: ['./eliminar-sede.component.scss']
})
export class EliminarSedeComponent {
  constructor(private siteService: SiteService, private router: Router) { }

  id_Sede: string = '';
  eliminandoSede(id: string) {
    this.siteService.eliminarSede(this.id_Sede).subscribe(
      data => {
        this.id_Sede = '';
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
