import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorOfLinksComponent } from './generator-of-links.component';

describe('GeneratorOfLinksComponent', () => {
  let component: GeneratorOfLinksComponent;
  let fixture: ComponentFixture<GeneratorOfLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratorOfLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorOfLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
