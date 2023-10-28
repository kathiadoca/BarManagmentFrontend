import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearSiteDto } from 'src/app/model/crearSite.dto';
import { ResponseCreateProductDto } from 'src/app/model/response-CreateSedeDto';
import { SiteService } from 'src/app/service/api/site.service';

@Component({
  selector: 'app-actualizar-sede',
  templateUrl: './actualizar-sede.component.html',
  styleUrls: ['./actualizar-sede.component.scss']
})
export class ActualizarSedeComponent implements OnInit {

  sedes: any = '';
  id_Sede: string = ''; // Declaración de id_Producto
  Nombre_Sede: string = '';
  crearSede!: FormGroup;

  constructor(
    private siteService: SiteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.crearSede = this.formBuilder.group({
      id_Sede: ['', Validators.required],
      Nombre_Sede: ['', Validators.required],
    });
  }

  resetForm() {
    this.crearSede.reset({
      id_Sede: '',
      Nombre_Sede: '',
    });
  }

  navegarAMenu() {
    this.router.navigate(['/admin-products']);
  }

  obtenerSede(id: string) {
    this.siteService.obtenerUnaSede(this.id_Sede).subscribe(
      data => {
        console.log('--->', data);
        this.crearSede.setValue({
          id_Sede: data.data.id_Sede,
          Nombre_Sede: data.data.Nombre_Sede,
        });
      },
      error => {
        console.error('Error al obtener la lista de productos:', error);
      }
    );
  }

  metodoActualizarSede() {
    const crearSiteDto: CrearSiteDto = this.crearSede.value;
    this.siteService.actualizarSede(crearSiteDto).subscribe((data) => {
      let responseCreateProductDto: ResponseCreateProductDto = data;
      this.resetForm();
      console.log('data:', data);
      /* if(responseCreateProductDto.statusCode === 201){
        this.router.navigate(['login'])
      } */
    });
  }
}
