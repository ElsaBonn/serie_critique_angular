import { Component, OnInit } from '@angular/core';
import {TvShow} from '../../models/tvshow.model';
import {TvshowService} from '../../services/tvshow/tvshow.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-tvshow-view',
  templateUrl: './edit-tvshow-view.component.html',
  styleUrls: ['./edit-tvshow-view.component.css']
})
export class EditTvshowViewComponent implements OnInit {

  tvShow: TvShow;
  msg: string;

  constructor(private tvshowService: TvshowService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.tvshowService.getTvShowById(+id)
      .then(tvShow => this.tvShow = tvShow);
  }

  onSubmitEditTvShowForm(tvShowEdited: TvShow): void {
    this.tvshowService.edit(tvShowEdited)
      .then(msg => this.msg = msg);
  }

}
