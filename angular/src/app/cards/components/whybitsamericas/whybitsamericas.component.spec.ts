import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhybitsamericasComponent } from './whybitsamericas.component';

describe('WhybitsamericasComponent', () => {
  let component: WhybitsamericasComponent;
  let fixture: ComponentFixture<WhybitsamericasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhybitsamericasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhybitsamericasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
