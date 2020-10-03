import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivosComponent } from './inactivos.component';

describe('InactivosComponent', () => {
  let component: InactivosComponent;
  let fixture: ComponentFixture<InactivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
