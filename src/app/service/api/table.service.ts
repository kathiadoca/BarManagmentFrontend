import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from 'src/app/model/response-login.interface';
import { ResponseGetUser } from 'src/app/model/response.getUser';
import { ResponseGetSite } from 'src/app/model/response.getSite';
import { CrearSiteDto } from 'src/app/model/crearSite.dto';
import { ResponseGetTable } from 'src/app/model/response.getTable';
import { CrearTableDto } from 'src/app/model/crearTable.dto';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private apiUrl = 'http://localhost:8080/barmanagment/table';
  url: string = 'http://localhost:8080/barmanagment'; 

  constructor(private httpClient: HttpClient) { }

  obtenerMesa(): Observable<ResponseGetTable> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.get<ResponseGetUser>(this.apiUrl + '/getAllTables', { headers });
  }

  obtenerUnaMesa(idMesa: string): Observable<ResponseGetTable> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.get<ResponseGetSite>(this.apiUrl + `/getOneTable?id_Mesa=${idMesa}`, { headers });
  }

  createTable(form: CrearTableDto): Observable<ResponseLogin> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    let direccion = this.apiUrl + "/create";
    return this.httpClient.post<ResponseLogin>(direccion, form, { headers });
  }

  actualizarMesa(form: CrearTableDto): Observable<ResponseGetUser> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

    return this.httpClient.put<ResponseGetUser>(this.apiUrl + '/updateTable', form, { headers });
  }

  eliminarMesa(idMesa: string): Observable<ResponseLogin> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.delete<ResponseLogin>(this.apiUrl + `/deleteTable?id_Mesa=${idMesa}`, { headers });
  }
}
