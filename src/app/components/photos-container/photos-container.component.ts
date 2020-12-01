import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/models/interfaces';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos-container',
  templateUrl: './photos-container.component.html',
  styleUrls: ['./photos-container.component.scss'],
})
export class PhotosContainerComponent implements OnInit {
  photos: IPhoto[];
  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe((data) => {
      this.photos = data;
    });
  }
}
