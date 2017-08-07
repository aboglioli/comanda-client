import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauceCupComponent } from './sauce-cup.component';

describe('SauceCupComponent', () => {
  let component: SauceCupComponent;
  let fixture: ComponentFixture<SauceCupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauceCupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauceCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
