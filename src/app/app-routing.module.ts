import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsContainerComponent } from './components/albums-container/albums-container.component';
import { CommentsContainerComponent } from './components/comments-container/comments-container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HelpComponent } from './components/help/help.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PhotosContainerComponent } from './components/photos-container/photos-container.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'comments', component: CommentsContainerComponent },
      { path: 'posts', component: PostsContainerComponent },
      { path: 'albums', component: AlbumsContainerComponent },
      { path: 'users', component: UsersContainerComponent },
      { path: 'photos', component: PhotosContainerComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'todos', component: TodosComponent },
      { path: 'videos', component: VideosComponent },
      { path: '', component: DashboardComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
