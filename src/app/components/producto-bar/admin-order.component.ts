import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseGetOrder } from 'src/app/model/response.getOrder';
import { UpdateOrderDTO } from 'src/app/model/updateOrder.dto';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminProductComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router){}
  reference: string = '';
  message: string = '';
  referencia: string = '';
  orderTotal: string = '';
  expirationDate: string = '';
  ean: string = '';
  status: number | undefined;
  btnDisable = true;
  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      //this.router.navigate(['admin-order']);
    }
  }

  toggleButton(){
    this.btnDisable = !this.btnDisable;
  }

  navegarAListarProductos() {
    this.router.navigate(['/listar-productos']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarACrearProducto() {
    this.router.navigate(['/crear-producto']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarAActualizarProducto() {
    this.router.navigate(['/actualizar-producto']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarEliminarProducto() {
    this.router.navigate(['/eliminar-producto']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarCrearUsuario() {
    this.router.navigate(['/crear-usuario-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarObtenerUsuarios() {
    this.router.navigate(['/obtener-usuario-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarActualizarUsuarios() {
    this.router.navigate(['/actualizar-usuario-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarEliminarUsuario() {
    this.router.navigate(['/eliminar-usuario-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarCrearSede() {
    this.router.navigate(['/crear-sede-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarObtenerSedes() {
    this.router.navigate(['/listar-sede-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarActualizarSede() {
    this.router.navigate(['/actualizar-sede-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarEliminarSede() {
    this.router.navigate(['/eliminar-sede-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarCrearMesa() {
    this.router.navigate(['/crear-mesa-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarListarMesa() {
    this.router.navigate(['/listar-mesa-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarEliminarMesa() {
    this.router.navigate(['/eliminar-mesa-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }

  navegarActualizarMesa() {
    this.router.navigate(['/actualizar-mesa-bar']); // Reemplaza '/admin-products' con la ruta que desees
  }
  
  order(){
    let responseOrder: ResponseGetOrder;
    this.apiService.getOrder(this.reference).subscribe(data=>{
      responseOrder = data;
      if(responseOrder.data === null){
        this.message = 'Factura no encontrada';
        setTimeout(() => {
          this.message = '';
        }, 2000);
      }
      this.referencia = responseOrder.data.reference;
      this.orderTotal = responseOrder.data.orderTotal;
      this.expirationDate = responseOrder.data.expirationDate;
      this.ean = responseOrder.data.ean;
      this.status = responseOrder.data.status;
      console.log(responseOrder)
    },
    error => {
      if(error.status === 401){
        this.router.navigate(['login'])
      }
    }
    )
  }

  payment(updateOrderDTO: UpdateOrderDTO){
    let responseOrder: ResponseGetOrder;
    this.apiService.payOrder(updateOrderDTO).subscribe(data=>{
      responseOrder = data;
      if(responseOrder.responseCode === 200) {
        this.message = 'Factura pagada exitosamente';
        setTimeout(() => {
          this.message = '';
        }, 2000);
        this.referencia = '';
        this.orderTotal = '';
        this.expirationDate = '';
        this.ean = '';
        this.status = undefined;
      }
    });
  }
}
