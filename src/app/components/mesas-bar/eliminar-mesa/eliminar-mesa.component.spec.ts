import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMesaComponent } from './eliminar-mesa.component';

describe('EliminarMesaComponent', () => {
  let component: EliminarMesaComponent;
  let fixture: ComponentFixture<EliminarMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
