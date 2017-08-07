import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateListComponent } from './intermediate-list.component';

describe('IntermediateListComponent', () => {
  let component: IntermediateListComponent;
  let fixture: ComponentFixture<IntermediateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
