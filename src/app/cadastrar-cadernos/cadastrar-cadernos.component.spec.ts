import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCadernosComponent } from './cadastrar-cadernos.component';

describe('CadastrarCadernosComponent', () => {
  let component: CadastrarCadernosComponent;
  let fixture: ComponentFixture<CadastrarCadernosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarCadernosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCadernosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
