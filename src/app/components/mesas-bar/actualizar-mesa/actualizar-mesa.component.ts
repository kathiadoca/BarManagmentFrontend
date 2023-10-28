import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearTableDto } from 'src/app/model/crearTable.dto';
import { ResponseCreateMesaDto } from 'src/app/model/response-CreateMesaDto';
import { TableService } from 'src/app/service/api/table.service';

@Component({
  selector: 'app-actualizar-mesa',
  templateUrl: './actualizar-mesa.component.html',
  styleUrls: ['./actualizar-mesa.component.scss']
})
export class ActualizarMesaComponent {

  mesas: any = '';
  id_Mesa: string = ''; // Declaración de id_Producto
  Nombre_Mesa: string = '';
  crearMesa!: FormGroup;

  constructor(
    private siteService: TableService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.crearMesa = this.formBuilder.group({
      id_Mesa: ['', Validators.required],
      Nombre_Mesa: ['', Validators.required],
    });
  }

  resetForm() {
    this.crearMesa.reset({
      id_Mesa: '',
      Nombre_Mesa: '',
    });
  }

  navegarAMenu() {
    this.router.navigate(['/admin-products']);
  }

  obtenerMesa(id: string) {
    this.siteService.obtenerUnaMesa(this.id_Mesa).subscribe(
      data => {
        console.log('--->', data);
        this.crearMesa.setValue({
          id_Mesa: data.data.id_Mesa,
          Nombre_Mesa: data.data.Nombre_Mesa,
        });
      },
      error => {
        console.error('Error al obtener la lista de productos:', error);
      }
    );
  }

  metodoActualizarMesa() {
    const crearSiteDto: CrearTableDto = this.crearMesa.value;
    this.siteService.actualizarMesa(crearSiteDto).subscribe((data) => {
      let responseCreateProductDto: ResponseCreateMesaDto = data;
      this.resetForm();
      console.log('data:', data);
      /* if(responseCreateProductDto.statusCode === 201){
        this.router.navigate(['login'])
      } */
    });
  }
}
