import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTvshowViewComponent } from './edit-tvshow-view.component';

describe('EditTvshowViewComponent', () => {
  let component: EditTvshowViewComponent;
  let fixture: ComponentFixture<EditTvshowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTvshowViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTvshowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
