import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from 'src/app/model/response-login.interface';
import { ResponseGetUser } from 'src/app/model/response.getUser';
import { ResponseGetSite } from 'src/app/model/response.getSite';
import { CrearSiteDto } from 'src/app/model/crearSite.dto';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private apiUrl = 'http://localhost:8080/barmanagment/site';
  url: string = 'http://localhost:8080/barmanagment'; 

  constructor(private httpClient: HttpClient) { }

  obtenerSede(): Observable<ResponseGetSite> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.get<ResponseGetUser>(this.apiUrl + '/getAllSites', { headers });
  }

  obtenerUnaSede(idSede: string): Observable<ResponseGetSite> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.get<ResponseGetSite>(this.apiUrl + `/getOneSite?id_Sede=${idSede}`, { headers });
  }

  createSite(form: CrearSiteDto): Observable<ResponseLogin> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    let direccion = this.apiUrl + "/create";
    return this.httpClient.post<ResponseLogin>(direccion, form, { headers });
  }

  actualizarSede(form: CrearSiteDto): Observable<ResponseGetUser> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

    return this.httpClient.put<ResponseGetUser>(this.apiUrl + '/updateSite', form, { headers });
  }

  eliminarSede(idSede: string): Observable<ResponseLogin> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.delete<ResponseLogin>(this.apiUrl + `/deleteSite?id_Sede=${idSede}`, { headers });
  }
}
