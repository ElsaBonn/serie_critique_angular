import { Component, OnInit } from '@angular/core';
import {TvShow} from '../../models/tvshow.model';
import {TvshowService} from '../../services/tvshow/tvshow.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-tvshow-view',
  templateUrl: './new-tvshow-view.component.html',
  styleUrls: ['./new-tvshow-view.component.css']
})
export class NewTvshowViewComponent implements OnInit {

  tvShow: TvShow;

  constructor( private tvshowService: TvshowService, private router: Router) {

    this.tvShow = new TvShow(null, null, null, null, null, null, null);

  }

  ngOnInit(): void {
  }

  /**
   * Submit a newTvShow
   * param tvShowToAdd
   */

  onSubmitNewTvShowForm(tvShowToAdd: TvShow): void {
    this.tvshowService.add(tvShowToAdd)
      .then( () => this.router.navigateByUrl('/tvShows'));
  }

}
