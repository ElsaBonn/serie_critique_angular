import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../../../../../ExamQuentinFAngular/src/app/Models/Comment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input() comment: Comment;
  @Output() submitFormReview: EventEmitter<Comment>;
  reviewForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.submitFormReview = new EventEmitter<Comment>();
  }

  ngOnInit(): void {
    this._initForm();

  }

  /**
   * Function for submit tvshow's review
   */

  onSubmitFormReview(): void {
    // set the courant date
    this.comment.date = new Date();
    this.submitFormReview.emit(this.comment);
  }

  private _initForm(): void {
    this.reviewForm = this.fb.group(
      {
        author: [null, [ Validators.required]],
        content:   [null, [Validators.required]]
      });

  }

}
