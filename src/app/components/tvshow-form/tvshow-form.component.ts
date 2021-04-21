import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TvShow} from '../../models/tvshow.model';
import {Book} from '../../../../../books-manager/src/app/models/book.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tvshow-form',
  templateUrl: './tvshow-form.component.html',
  styleUrls: ['./tvshow-form.component.css']
})
export class TvshowFormComponent implements OnInit {

  @Input() tvShow: TvShow;
  @Input() submitLabel: string;

  @Output() submitForm: EventEmitter<TvShow>;

  tvShowForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.submitForm = new EventEmitter<TvShow>();
  }

  ngOnInit(): void {
    this._initForm();
  }

  /**
   * Submit tv show's
   */

  onSubmitForm(): void {
    this.submitForm.emit(this.tvShow);

  }

  private _initForm(): void {
    this.tvShowForm = this.fb.group(
      {
        title: [null, [Validators.required, Validators.minLength(5 ), Validators.maxLength(30)]],
        review: [null, [Validators.required, Validators.minLength(10)]],
        description: [null, [Validators.required, Validators.minLength(10 )]],
        release: [null, [Validators.required]],
        picture: [null, [Validators.required]]
      }
    );

  }

}
