import { Component, OnInit } from '@angular/core';
import {TvShow} from '../../models/tvshow.model';
import {TvshowService} from '../../services/tvshow/tvshow.service';

@Component({
  selector: 'app-tvshows-view',
  templateUrl: './tvshows-view.component.html',
  styleUrls: ['./tvshows-view.component.css']
})
export class TvshowsViewComponent implements OnInit {

  tvShows: Array<TvShow>;

  // singleton tvShow Service
  constructor(private tvshowService: TvshowService) { }

  ngOnInit(): void {

    this.tvShows = this.tvshowService.tvShows;
  }

}
