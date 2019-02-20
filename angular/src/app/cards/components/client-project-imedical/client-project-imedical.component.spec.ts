import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProjectImedicalComponent } from './client-project-imedical.component';

describe('ClientProjectImedicalComponent', () => {
  let component: ClientProjectImedicalComponent;
  let fixture: ComponentFixture<ClientProjectImedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProjectImedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProjectImedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
