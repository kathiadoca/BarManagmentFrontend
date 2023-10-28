import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrearSiteDto } from 'src/app/model/crearSite.dto';
import { ResponseGetUser } from 'src/app/model/response.getUser';
import { SiteService } from 'src/app/service/api/site.service';

@Component({
  selector: 'app-listar-sede',
  templateUrl: './listar-sede.component.html',
  styleUrls: ['./listar-sede.component.scss']
})
export class ListarSedeComponent implements OnInit {

  sedes: any = '';

  constructor(private siteService: SiteService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerSedes();
  }

  navegarAMenu() {
    this.router.navigate(['/admin-products']); // Reemplaza '/admin-products' con la ruta que desees
  }

  obtenerSedes() {
    let crearSiteDto: ResponseGetUser;

    this.siteService.obtenerSede().subscribe(
      data => {
        this.sedes = data.data;
      },
      error => {
        console.error('Error al obtener la lista de productos:', error);
      }
    );
  }
}
