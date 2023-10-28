import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseGetUser } from 'src/app/model/response.getUser';
import { TableService } from 'src/app/service/api/table.service';

@Component({
  selector: 'app-listar-mesa',
  templateUrl: './listar-mesa.component.html',
  styleUrls: ['./listar-mesa.component.scss']
})
export class ListarMesaComponent {
  mesas: any = '';

  constructor(private tableService: TableService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerMesa();
  }

  navegarAMenu() {
    this.router.navigate(['/admin-products']); // Reemplaza '/admin-products' con la ruta que desees
  }

  obtenerMesa() {
    let crearSiteDto: ResponseGetUser;

    this.tableService.obtenerMesa().subscribe(
      data => {
        this.mesas = data.data;
      },
      error => {
        console.error('Error al obtener la lista de productos:', error);
      }
    );
  }
}
