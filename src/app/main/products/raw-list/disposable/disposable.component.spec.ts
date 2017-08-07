import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposableComponent } from './disposable.component';

describe('DisposableComponent', () => {
  let component: DisposableComponent;
  let fixture: ComponentFixture<DisposableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
