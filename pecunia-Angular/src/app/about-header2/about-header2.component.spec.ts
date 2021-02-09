import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHeader2Component } from './about-header2.component';

describe('AboutHeader2Component', () => {
  let component: AboutHeader2Component;
  let fixture: ComponentFixture<AboutHeader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHeader2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
