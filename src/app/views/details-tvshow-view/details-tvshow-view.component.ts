import { Component, OnInit } from '@angular/core';
import {TvShow} from '../../models/tvshow.model';
import {ActivatedRoute} from '@angular/router';
import {TvshowService} from '../../services/tvshow/tvshow.service';
import {Comment} from '../../models/comment.model';

@Component({
  selector: 'app-details-tvshow-view',
  templateUrl: './details-tvshow-view.component.html',
  styleUrls: ['./details-tvshow-view.component.css']
})
export class DetailsTvshowViewComponent implements OnInit {

  tvShow: TvShow;
  comment: Comment;

  constructor(private route: ActivatedRoute, private tvshowService: TvshowService) {
    this.comment = new  Comment(null, null, null, null);

  }

  ngOnInit(): void {

    const id = this.route.snapshot.params.id;

    this.tvshowService.getTvShowById(+id)
      .then(tvShow => this.tvShow = tvShow);
  }

  onSubmitNewReviewForm(newComment: Comment): void {
    this.tvshowService.addComment(newComment, this.tvShow)
      .then();
  }

}
