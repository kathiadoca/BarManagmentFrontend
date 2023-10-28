import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearUserDto } from 'src/app/model/crearUser.dto';
import { ResponseCreateProductDto } from 'src/app/model/reponse-CreateProductoDto';
import { ResponseLogin } from 'src/app/model/response-login.interface';
import { UserDto } from 'src/app/model/user.dto';
import { ApiService } from 'src/app/service/api/api.service';
import { UserService } from 'src/app/service/api/user.service';

@Component({
  selector: 'app-usuario-bar',
  templateUrl: './crear-usuario-bar.component.html',
  styleUrls: ['./usuario-bar.component.scss']
})
export class CrearUsuarioBarComponent {
  @ViewChild('myForm', { static: false }) myForm: NgForm | undefined;
  constructor(private userService: UserService, private router: Router, private apiService: ApiService){}

  ngOnInit(): void {
  }

  crearUsuario = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Apellido: new FormControl('', Validators.required),
    Telefono: new FormControl('', Validators.required),
    Direccion: new FormControl('', Validators.required),
    Usuario: new FormControl('', Validators.required),
    Clave: new FormControl('', Validators.required),
    Sede: new FormControl('', Validators.required),
    Rol: new FormControl('', Validators.required),
  });

  postForm(user: Partial<{ Nombre: string | null; Apellido: string | null; Telefono: string | null; Direccion: string | null; Usuario: string | null; Clave: string | null; Sede: string | null; Rol: string | null;}>){
    const userDto: UserDto = user as UserDto;
    this.apiService.signup(userDto).subscribe((data)=>{
      let responseAuth: ResponseLogin = data;
      console.log(data)
      this.crearUsuario.reset();
      if(responseAuth.responseCode === 201){
        this.router.navigate(['login'])
      }
    });
  }

  navegarAMenu() {
    this.router.navigate(['/admin-products']); // Reemplaza '/admin-products' con la ruta que desees
  }
  
}
