import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentsContainerComponent } from './components/comments-container/comments-container.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { AlbumsContainerComponent } from './components/albums-container/albums-container.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { PhotosContainerComponent } from './components/photos-container/photos-container.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotosService } from './services/photos.service';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { CommentsService } from './services/comments.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { FeedbackComponent, FeedbackDialog } from './components/feedback/feedback.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HelpComponent } from './components/help/help.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentsContainerComponent,
    PostsContainerComponent,
    PostComponent,
    CommentComponent,
    AlbumsContainerComponent,
    UsersContainerComponent,
    PhotosContainerComponent,
    PhotoComponent,
    FeedbackComponent,
    FeedbackDialog,
    HelpComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  entryComponents: [FeedbackComponent, FeedbackDialog],
  providers: [PhotosService, PostsService, CommentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
