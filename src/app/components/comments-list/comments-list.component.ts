import { Component, OnInit } from '@angular/core';
import {TvshowService} from '../../services/tvshow/tvshow.service';
import {Comment} from '../../../../../ExamQuentinFAngular/src/app/Models/Comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  comment: Comment;

  constructor(private tvshowService: TvshowService) {
    this.comment = new  Comment(null, null, null, null);

  }

  ngOnInit(): void {
  }

}
