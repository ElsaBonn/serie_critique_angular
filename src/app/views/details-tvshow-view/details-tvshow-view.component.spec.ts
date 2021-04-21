import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTvshowViewComponent } from './details-tvshow-view.component';

describe('DetailsTvshowViewComponent', () => {
  let component: DetailsTvshowViewComponent;
  let fixture: ComponentFixture<DetailsTvshowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTvshowViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTvshowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
