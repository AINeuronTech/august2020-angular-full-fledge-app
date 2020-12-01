import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPost } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postsUrl);
  }
}
