import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/service/api/productos.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.scss']
})
export class EliminarProductoComponent {
  constructor(
    private productosService: ProductosService, private router: Router,) { }
  id_Producto: string = '';
  eliminandoProducto(id: string) {
    this.productosService.eliminarProducto(this.id_Producto).subscribe(
      data => {
        console.log('--->', data);
        this.id_Producto = '';
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
