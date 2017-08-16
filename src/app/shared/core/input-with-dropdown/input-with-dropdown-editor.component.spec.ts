import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithDropdownEditorComponent } from './input-with-dropdown-editor.component';

describe('InputWithDropdownEditorComponent', () => {
  let component: InputWithDropdownEditorComponent;
  let fixture: ComponentFixture<InputWithDropdownEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithDropdownEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithDropdownEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
