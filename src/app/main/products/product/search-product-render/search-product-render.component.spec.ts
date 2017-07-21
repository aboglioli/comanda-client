import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductRenderComponent } from './search-product-render.component';

describe('SearchProductRenderComponent', () => {
  let component: SearchProductRenderComponent;
  let fixture: ComponentFixture<SearchProductRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
