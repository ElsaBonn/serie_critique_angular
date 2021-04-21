import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTvshowViewComponent } from './new-tvshow-view.component';

describe('NewTvshowViewComponent', () => {
  let component: NewTvshowViewComponent;
  let fixture: ComponentFixture<NewTvshowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTvshowViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTvshowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
