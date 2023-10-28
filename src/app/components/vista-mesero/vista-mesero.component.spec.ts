import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMeseroComponent } from './vista-mesero.component';

describe('VistaMeseroComponent', () => {
  let component: VistaMeseroComponent;
  let fixture: ComponentFixture<VistaMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaMeseroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
