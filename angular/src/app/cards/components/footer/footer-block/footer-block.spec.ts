import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBlock } from './footer-block';

describe('FooterContactComponent', () => {
  let component: FooterBlock;
  let fixture: ComponentFixture<FooterBlock>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBlock ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
