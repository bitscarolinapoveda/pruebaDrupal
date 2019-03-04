import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiesProjectserviceComponent } from './tecnologies-projectservice.component';

describe('AppTecnologiesProjectserviceComponent', () => {
  let component: TecnologiesProjectserviceComponent;
  let fixture: ComponentFixture<TecnologiesProjectserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologiesProjectserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiesProjectserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
