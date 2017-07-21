import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawListComponent } from './raw.component';

describe('RawComponent', () => {
  let component: RawListComponent;
  let fixture: ComponentFixture<RawListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
