import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearUserDto } from 'src/app/model/crearUser.dto';
import { UserService } from 'src/app/service/api/user.service';

@Component({
  selector: 'app-actualizar-usuario-bar',
  templateUrl: './actualizar-usuario-bar.component.html',
  styleUrls: ['./actualizar-usuario-bar.component.scss']
})
export class ActualizarUsuarioBarComponent implements OnInit {
  usuarios: any = '';
  Nombre: string = '';
  Apellido: string = '';
  Telefono: string = '';
  Direccion: string = '';
  Usuario: string = '';
  Clave: string = '';
  Sede: string = '';
  Rol: string = '';
  crearUsuario!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.crearUsuario = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Telefono: ['', Validators.required],
      Direccion: ['', Validators.required],
      Usuario: ['', Validators.required],
      Clave: ['', Validators.required],
      Sede: ['', Validators.required],
      Rol: ['', Validators.required],
    });
  }

  navegarAMenu() {
    this.router.navigate(['/admin-products']);
  }

  obtenerUsuario(usuario: string) {
    this.userService.obtenerUnUsuario(this.Usuario).subscribe(
      data => {
        console.log('--->', data);
        this.crearUsuario.setValue({
          Nombre: data.data.Nombre,
          Apellido: data.data.Apellido,
          Telefono: data.data.Telefono,
          Direccion: data.data.Direccion,
          Usuario: data.data.Usuario,
          Clave: data.data.Clave,
          Sede: data.data.Sede,
          Rol: data.data.Rol
        });
      },
      error => {
        console.error('Error al obtener la lista de productos:', error);
      }
    );
  }

  resetForm() {
    this.crearUsuario.reset({
      usuarios:'',
      Nombre: '',
      Apellido: '',
      Telefono: '',
      Direccion: '',
      Usuario: '',
      Clave: '',
      Sede: '',
      Rol: ''
    });
  }

  metodoActualizarUsuario() {
    const userDto: CrearUserDto = this.crearUsuario.value;
    this.userService.actualizarUsuario(userDto).subscribe((data) => {
      //let responseCreateProductDto: ResponseCreateProductDto = data;
      console.log('data:', data);
      this.resetForm();
      /* if(responseCreateProductDto.statusCode === 201){
        this.router.navigate(['login'])
      } */
    });
  }
}
