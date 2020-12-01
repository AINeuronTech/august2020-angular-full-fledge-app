import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsContainerComponent } from './albums-container.component';

describe('AlbumsContainerComponent', () => {
  let component: AlbumsContainerComponent;
  let fixture: ComponentFixture<AlbumsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
