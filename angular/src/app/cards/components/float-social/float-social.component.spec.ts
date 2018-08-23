import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatSocialComponent } from './float-social.component';

describe('FooterContactComponent', () => {
  let component: FloatSocialComponent;
  let fixture: ComponentFixture<FloatSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FloatSocialComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
