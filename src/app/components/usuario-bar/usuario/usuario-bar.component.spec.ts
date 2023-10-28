import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearUsuarioBarComponent } from './crear-usuario-bar.component';


describe('UsuarioBarComponent', () => {
  let component: CrearUsuarioBarComponent;
  let fixture: ComponentFixture<CrearUsuarioBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsuarioBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
