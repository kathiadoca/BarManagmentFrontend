import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearProducto } from 'src/app/model/crearProducto.dto';
import { ProductosDto } from 'src/app/model/productos.dto';
import { ResponseCreateProductDto } from 'src/app/model/reponse-CreateProductoDto';
import { ProductosService } from 'src/app/service/api/productos.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.scss']
})
export class ActualizarProductoComponent implements OnInit {
  productos: any = '';
  id_Producto: string = ''; // Declaración de id_Producto
  Nombre: string = '';
  Costo: number = 0;
  Precio_venta: number = 0;
  Cantidad: number = 0;
  Sede: string = '';
  crearProducto!: FormGroup;

  constructor(
    private productosService: ProductosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.crearProducto = this.formBuilder.group({
      id_Producto: ['', Validators.required],
      Nombre: ['', Validators.required],
      Costo: [0, Validators.required],
      Precio_venta: [0, Validators.required],
      Cantidad: [0, Validators.required],
      Sede: ['', Validators.required],
    });
  }

  resetForm() {
    this.crearProducto.reset({
      id_Producto: '',
      Nombre: '',
      Costo: 0,
      Precio_venta: 0,
      Cantidad: 0,
      Sede: ''
    });
  }

  navegarAMenu() {
    this.router.navigate(['/admin-products']);
  }

  obtenerProductos(id: string) {
    this.productosService.obtenerUnProducto(this.id_Producto).subscribe(
      data => {
        console.log('--->', data);
        this.crearProducto.setValue({
          id_Producto: data.data.id_Producto,
          Nombre: data.data.Nombre,
          Costo: data.data.Costo,
          Precio_venta: data.data.Precio_venta,
          Cantidad: data.data.Cantidad,
          Sede: data.data.Sede
        });
      },
      error => {
        console.error('Error al obtener la lista de productos:', error);
      }
    );
  }

  metodoActualizarProducto() {
    const userDto: CrearProducto = this.crearProducto.value;
    this.productosService.actualizarProductos(userDto).subscribe((data) => {
      let responseCreateProductDto: ResponseCreateProductDto = data;
      this.resetForm();
      console.log('data:', data);
      /* if(responseCreateProductDto.statusCode === 201){
        this.router.navigate(['login'])
      } */
    });
  }
}
