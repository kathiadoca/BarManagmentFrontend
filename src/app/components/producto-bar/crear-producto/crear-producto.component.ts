import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearProducto } from 'src/app/model/crearProducto.dto';
import { ResponseCreateProductDto } from 'src/app/model/reponse-CreateProductoDto';
import { ProductosService } from 'src/app/service/api/productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myForm: NgForm | undefined;
  constructor(private productosService: ProductosService, private router: Router){}
  ngOnInit(): void {
  }

  crearProducto = new FormGroup({
    id_Producto: new FormControl('', Validators.required),
    Nombre: new FormControl('', Validators.required),
    Costo: new FormControl(0, Validators.required),
    Precio_venta: new FormControl(0, Validators.required),
    Cantidad: new FormControl(0, Validators.required),
    Sede: new FormControl('', Validators.required),
  });

  navegarAMenu() {
    this.router.navigate(['/admin-products']); // Reemplaza '/admin-products' con la ruta que desees
  }

  createProduct(producto: Partial<{ id_Producto: string | null; Nombre: string | null; Costo: number | null; Precio_venta: number | null; Cantidad: number | null; Sede: string | null; }>){
    const userDto: CrearProducto = producto as CrearProducto;
    this.productosService.crearProductos(userDto).subscribe((data)=>{
      let responseCreateProductDto: ResponseCreateProductDto = data;
      this.crearProducto.reset();
      /* if(responseCreateProductDto.statusCode === 201){
        this.router.navigate(['login'])
      } */
    });
  }
}
