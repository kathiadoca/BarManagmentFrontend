import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSedeComponent } from './actualizar-sede.component';

describe('ActualizarSedeComponent', () => {
  let component: ActualizarSedeComponent;
  let fixture: ComponentFixture<ActualizarSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarSedeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
