import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableService } from 'src/app/service/api/table.service';

@Component({
  selector: 'app-eliminar-mesa',
  templateUrl: './eliminar-mesa.component.html',
  styleUrls: ['./eliminar-mesa.component.scss']
})
export class EliminarMesaComponent {

  constructor(private tableService: TableService, private router: Router) { }

  id_Mesa: string = '';
  eliminandoMesa(id: string) {
    this.tableService.eliminarMesa(this.id_Mesa).subscribe(
      data => {
        this.id_Mesa = '';
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
