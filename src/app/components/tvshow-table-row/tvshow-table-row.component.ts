 import {Component, Input, OnChanges, OnInit} from '@angular/core';
 import {TvshowService} from '../../services/tvshow/tvshow.service';

@Component({
  selector: '[app-tvshow-table-row]',
  templateUrl: './tvshow-table-row.component.html',
  styleUrls: ['./tvshow-table-row.component.css']
})
export class TvshowTableRowComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() release: any;

  constructor( private tvshowService: TvshowService) { }

  ngOnInit(): void {
  }

  onClickDeleteBtn(): void {
    this.tvshowService.delete(this.id);
  }

}
