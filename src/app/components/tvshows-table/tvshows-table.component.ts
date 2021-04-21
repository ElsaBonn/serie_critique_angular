import {Component, Input, OnInit} from '@angular/core';
import {TvShow} from '../../models/tvshow.model';

@Component({
  selector: 'app-tvshows-table',
  templateUrl: './tvshows-table.component.html',
  styleUrls: ['./tvshows-table.component.css']
})
export class TvshowsTableComponent implements OnInit {

  @Input() tvShows: Array<TvShow>;

  constructor() { }

  ngOnInit(): void {
  }

}
