import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthViewComponent} from './views/auth-view/auth-view.component';
import {AuthGuard} from './guards/auth/auth.guard';

import {TvshowsViewComponent} from './views/tvshows-view/tvshows-view.component';
import {NotFoundViewComponent} from './views/not-found-view/not-found-view.component';

import {DetailsTvshowViewComponent} from './views/details-tvshow-view/details-tvshow-view.component';

import {NewTvshowViewComponent} from './views/new-tvshow-view/new-tvshow-view.component';

import { EditTvshowViewComponent } from './views/edit-tvshow-view/edit-tvshow-view.component';

const routes: Routes = [
  // authentification
  {path: '', component: AuthViewComponent},
  {path: 'tvShows', canActivate: [AuthGuard], component: TvshowsViewComponent},
  {path: 'tvShow/new', canActivate: [AuthGuard], component: NewTvshowViewComponent},
  {path: 'tvShow/edit/:id', canActivate: [AuthGuard], component: EditTvshowViewComponent},
  {path: 'tvShow/:id', canActivate: [AuthGuard], component: DetailsTvshowViewComponent},
  {path: 'not-found',  component: NotFoundViewComponent},
  {path: '**', redirectTo: 'not-found'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
