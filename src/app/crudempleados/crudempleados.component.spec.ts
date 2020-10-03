import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudempleadosComponent } from './crudempleados.component';

describe('CrudempleadosComponent', () => {
  let component: CrudempleadosComponent;
  let fixture: ComponentFixture<CrudempleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudempleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
