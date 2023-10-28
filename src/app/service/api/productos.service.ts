import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductosDto } from 'src/app/model/productos.dto';
import { ResponseCreateProductDto } from 'src/app/model/reponse-CreateProductoDto';
import { CrearProducto } from 'src/app/model/crearProducto.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:8080/barmanagment/products';

  constructor(private httpClient: HttpClient) { }

  obtenerProductos(): Observable<ProductosDto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.get<ProductosDto>(this.apiUrl + '/getAllProducts', { headers });
  }

  obtenerUnProducto(id: string): Observable<ProductosDto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.get<ProductosDto>(this.apiUrl + `/getOneProducts?id_Producto=${id}`, { headers });
  }

  crearProductos(form: CrearProducto): Observable<ResponseCreateProductDto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.post<ResponseCreateProductDto>(this.apiUrl + '/create', form, { headers });
  }

  actualizarProductos(form: CrearProducto): Observable<ResponseCreateProductDto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    console.log('xxx>', this.apiUrl + '/updateProducts', form, { headers });
    return this.httpClient.put<ResponseCreateProductDto>(this.apiUrl + '/updateProducts', form, { headers });
  }

  eliminarProducto(id: string): Observable<ProductosDto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.delete<ProductosDto>(this.apiUrl + `/deleteProducts?id_Producto=${id}`, { headers });
  }
}
