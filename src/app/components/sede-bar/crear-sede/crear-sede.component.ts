import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearSiteDto } from 'src/app/model/crearSite.dto';
import { SiteService } from 'src/app/service/api/site.service';

@Component({
  selector: 'app-crear-sede',
  templateUrl: './crear-sede.component.html',
  styleUrls: ['./crear-sede.component.scss']
})
export class CrearSedeComponent {
  @ViewChild('myForm', { static: false }) myForm: NgForm | undefined;
  constructor(private siteService: SiteService, private router: Router){}
  ngOnInit(): void {
  }

  crearSede = new FormGroup({
    id_Sede: new FormControl('', Validators.required),
    Nombre_Sede: new FormControl('', Validators.required),
  });

  navegarAMenu() {
    this.router.navigate(['/admin-products']); // Reemplaza '/admin-products' con la ruta que desees
  }

  createSede(sede: Partial<{ id_Sede: string | null; Nombre_Sede: string | null}>){
    const siteDto: CrearSiteDto = sede as CrearSiteDto;
    this.siteService.createSite(siteDto).subscribe((data)=>{
      //let responseCreateProductDto: ResponseCreateProductDto = data;
      this.crearSede.reset();
      /* if(responseCreateProductDto.statusCode === 201){
        this.router.navResponseCreateProductDtoigate(['login'])
      } */
    });
  }
}
