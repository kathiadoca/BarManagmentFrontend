import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCajeroComponent } from './vista-cajero.component';

describe('VistaCajeroComponent', () => {
  let component: VistaCajeroComponent;
  let fixture: ComponentFixture<VistaCajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCajeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
