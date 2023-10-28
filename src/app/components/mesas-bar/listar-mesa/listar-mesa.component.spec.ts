import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMesaComponent } from './listar-mesa.component';

describe('ListarMesaComponent', () => {
  let component: ListarMesaComponent;
  let fixture: ComponentFixture<ListarMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
