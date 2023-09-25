import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListNameComponent } from './track-list-name.component';

describe('TrackListNameComponent', () => {
  let component: TrackListNameComponent;
  let fixture: ComponentFixture<TrackListNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackListNameComponent]
    });
    fixture = TestBed.createComponent(TrackListNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
