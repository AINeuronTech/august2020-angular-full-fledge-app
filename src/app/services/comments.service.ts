import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IComment } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) {}

  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.commentsUrl);
  }
}
