import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowTableRowComponent } from './tvshow-table-row.component';

describe('TvshowTableRowComponent', () => {
  let component: TvshowTableRowComponent;
  let fixture: ComponentFixture<TvshowTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvshowTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
