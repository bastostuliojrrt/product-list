import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjecaoDependenciaComponent } from './injecao-dependencia.component';

describe('InjecaoDependenciaComponent', () => {
  let component: InjecaoDependenciaComponent;
  let fixture: ComponentFixture<InjecaoDependenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjecaoDependenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjecaoDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
