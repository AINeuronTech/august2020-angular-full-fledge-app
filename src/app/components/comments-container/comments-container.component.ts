import { Component, OnInit } from '@angular/core';
import { IComment } from 'src/app/models/interfaces';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.scss'],
})
export class CommentsContainerComponent implements OnInit {
  comments: IComment[];
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((data) => {
      this.comments = data;
    });
  }
}
