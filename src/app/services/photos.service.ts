import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPhoto } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private photosUrl ='/assets/data/photos.json';
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<IPhoto[]> {
    debugger
    return this.http.get<IPhoto[]>(this.photosUrl);
  }
}
