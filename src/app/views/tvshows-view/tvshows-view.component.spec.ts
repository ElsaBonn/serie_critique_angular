import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsViewComponent } from './tvshows-view.component';

describe('TvshowsViewComponent', () => {
  let component: TvshowsViewComponent;
  let fixture: ComponentFixture<TvshowsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvshowsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
