import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosDto } from 'src/app/model/productos.dto';
import { ProductosService } from 'src/app/service/api/productos.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent implements OnInit {
  productos: any = '';

  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  navegarAMenu() {
    this.router.navigate(['/admin-products']); // Reemplaza '/admin-products' con la ruta que desees
  }

  obtenerProductos() {
    let productosDto: ProductosDto;

    this.productosService.obtenerProductos().subscribe(
      data => {
        console.log('--->', data);
        this.productos = data.data;
      },
      error => {
        console.error('Error al obtener la lista de productos:', error);
      }
    );
  }
}
