import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithDropdownRenderComponent } from './input-with-dropdown-render.component';

describe('InputWithDropdownRenderComponent', () => {
  let component: InputWithDropdownRenderComponent;
  let fixture: ComponentFixture<InputWithDropdownRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithDropdownRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithDropdownRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
