import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarUsuarioBarComponent } from './eliminar-usuario-bar.component';

describe('EliminarUsuarioBarComponent', () => {
  let component: EliminarUsuarioBarComponent;
  let fixture: ComponentFixture<EliminarUsuarioBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarUsuarioBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarUsuarioBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
