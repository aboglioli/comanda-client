import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawComponent } from './raw.component';

describe('RawComponent', () => {
  let component: RawComponent;
  let fixture: ComponentFixture<RawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
