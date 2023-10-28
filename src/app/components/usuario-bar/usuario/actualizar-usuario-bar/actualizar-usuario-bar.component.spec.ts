import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarUsuarioBarComponent } from './actualizar-usuario-bar.component';

describe('ActualizarUsuarioBarComponent', () => {
  let component: ActualizarUsuarioBarComponent;
  let fixture: ComponentFixture<ActualizarUsuarioBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarUsuarioBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarUsuarioBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
