import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalListComponent } from './final-list.component';

describe('FinalListComponent', () => {
  let component: FinalListComponent;
  let fixture: ComponentFixture<FinalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
