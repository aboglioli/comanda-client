import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputEditorComponent } from './search-input-render.component';

describe('SearchInputRenderComponent', () => {
  let component: SearchInputEditorComponent;
  let fixture: ComponentFixture<SearchInputEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInputEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
