import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosContainerComponent } from './photos-container.component';

describe('PhotosContainerComponent', () => {
  let component: PhotosContainerComponent;
  let fixture: ComponentFixture<PhotosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
