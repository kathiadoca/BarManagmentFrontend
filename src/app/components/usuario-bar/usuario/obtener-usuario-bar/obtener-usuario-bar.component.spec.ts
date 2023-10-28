import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerUsuarioBarComponent } from './obtener-usuario-bar.component';

describe('ObtenerUsuarioBarComponent', () => {
  let component: ObtenerUsuarioBarComponent;
  let fixture: ComponentFixture<ObtenerUsuarioBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerUsuarioBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObtenerUsuarioBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
