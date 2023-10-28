import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearTableDto } from 'src/app/model/crearTable.dto';
import { TableService } from 'src/app/service/api/table.service';

@Component({
  selector: 'app-crear-mesa',
  templateUrl: './crear-mesa.component.html',
  styleUrls: ['./crear-mesa.component.scss']
})
export class CrearMesaComponent {

  @ViewChild('myForm', { static: false }) myForm: NgForm | undefined;
  constructor(private siteService: TableService, private router: Router){}
  ngOnInit(): void {
  }

  crearMesaForm = new FormGroup({
    id_Mesa: new FormControl('', Validators.required),
    Nombre_Mesa: new FormControl('', Validators.required),
  });

  navegarAMenu() {
    this.router.navigate(['/admin-products']); // Reemplaza '/admin-products' con la ruta que desees
  }

  createMesa(sede: Partial<{ id_Mesa: string | null; Nombre_Mesa: string | null}>){
    const siteDto: CrearTableDto = sede as CrearTableDto;
    this.siteService.createTable(siteDto).subscribe((data)=>{
      //let responseCreateProductDto: ResponseCreateProductDto = data;
      this.crearMesaForm.reset();
      /* if(responseCreateProductDto.statusCode === 201){
        this.router.navResponseCreateProductDtoigate(['login'])
      } */
    });
  }
}
