import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { DetailsTvshowViewComponent } from './views/details-tvshow-view/details-tvshow-view.component';
import { TvshowsTableComponent } from './components/tvshows-table/tvshows-table.component';
import { TvshowTableRowComponent } from './components/tvshow-table-row/tvshow-table-row.component';
import { TvshowsViewComponent } from './views/tvshows-view/tvshows-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth/auth.service';
import {TvshowService} from './services/tvshow/tvshow.service';
import { EditTvshowViewComponent } from './views/edit-tvshow-view/edit-tvshow-view.component';
import { NewTvshowViewComponent } from './views/new-tvshow-view/new-tvshow-view.component';
import { TvshowFormComponent } from './components/tvshow-form/tvshow-form.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundViewComponent,
    AuthViewComponent,
    DetailsTvshowViewComponent,
    TvshowsTableComponent,
    TvshowTableRowComponent,
    TvshowsViewComponent,
    EditTvshowViewComponent,
    NewTvshowViewComponent,
    TvshowFormComponent,
    CommentFormComponent,
    CommentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // import singletons
  providers: [AuthService, TvshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
