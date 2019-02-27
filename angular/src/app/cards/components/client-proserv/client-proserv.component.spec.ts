import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProservComponent } from './client-proserv.component';

describe('ClientProservComponent', () => {
  let component: ClientProservComponent;
  let fixture: ComponentFixture<ClientProservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
