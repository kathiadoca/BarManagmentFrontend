import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from 'src/app/model/response-login.interface';
import { UserDto } from 'src/app/model/user.dto';
import { ResponseGetUser } from 'src/app/model/response.getUser';
import { CrearUserDto } from 'src/app/model/crearUser.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/barmanagment/user';
  url: string = 'http://localhost:8080/barmanagment'; 

  constructor(private httpClient: HttpClient) { }

  obtenerUsuario(): Observable<ResponseGetUser> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.get<ResponseGetUser>(this.apiUrl + '/getAllUser', { headers });
  }

  obtenerUnUsuario(usuario: string): Observable<ResponseGetUser> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.get<ResponseGetUser>(this.apiUrl + `/getOneUser?Usuario=${usuario}`, { headers });
  }

  signup(form: UserDto): Observable<ResponseLogin> {
    let direccion = this.url + "/auth/register";
    return this.httpClient.post<ResponseLogin>(direccion, form);
}

  actualizarUsuario(form: CrearUserDto): Observable<ResponseGetUser> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

    return this.httpClient.put<ResponseGetUser>(this.apiUrl + '/updateUser', form, { headers });
  }

  eliminarProducto(user: string): Observable<ResponseLogin> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.httpClient.delete<ResponseLogin>(this.apiUrl + `/deleteUser?Usuario=${user}`, { headers });
  }
}
