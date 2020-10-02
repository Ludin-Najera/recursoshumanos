import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroempleadosComponent } from './maestroempleados.component';

describe('MaestroempleadosComponent', () => {
  let component: MaestroempleadosComponent;
  let fixture: ComponentFixture<MaestroempleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroempleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
