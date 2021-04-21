import {Comment} from './comment.model';

export class TvShow {

  private _id: number;
  private _title: string;
  private _release: any;
  private _description: any;
  private _review: string;
  private _picture: string;
  private _comments: Array<Comment>;


  constructor(id: number, title: string, release: any, description: any, review: string, picture: string, comments: Array<Comment>) {
    this._id = id;
    this._title = title;
    this._release = release;
    this._description = description;
    this._review = review;
    this._picture = picture;
    this._comments = comments;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get release(): any {
    return this._release;
  }

  set release(value: any) {
    this._release = value;
  }

  get description(): any {
    return this._description;
  }

  set description(value: any) {
    this._description = value;
  }

  get review(): string {
    return this._review;
  }

  set review(value: string) {
    this._review = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get comments(): Array<Comment> {
    return this._comments;
  }

  set comments(value: Array<Comment>) {
    this._comments = value;
  }
}
