import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauceComponent } from './sauce.component';

describe('SauceComponent', () => {
  let component: SauceComponent;
  let fixture: ComponentFixture<SauceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
