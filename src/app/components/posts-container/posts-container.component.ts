import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/models/interfaces';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {

  photos: IPhoto[];
  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe((userData) => {
      this.photos = userData;
    });
  }

}
