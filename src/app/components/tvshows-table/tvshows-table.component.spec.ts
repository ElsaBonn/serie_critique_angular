import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsTableComponent } from './tvshows-table.component';

describe('TvshowsTableComponent', () => {
  let component: TvshowsTableComponent;
  let fixture: ComponentFixture<TvshowsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvshowsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
