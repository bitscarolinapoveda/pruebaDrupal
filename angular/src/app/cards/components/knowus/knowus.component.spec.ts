import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowusComponent } from './knowus.component';

describe('KnowusComponent', () => {
  let component: KnowusComponent;
  let fixture: ComponentFixture<KnowusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
