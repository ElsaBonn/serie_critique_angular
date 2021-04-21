export class Comment {

  private _id: number;
  private _date: any;
  private _author: string;
  private _content: string;


  constructor(id: number, date: any, author: string, content: string) {
    this._id = id;
    this._date = date;
    this._author = author;
    this._content = content;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get date(): any {
    return this._date;
  }

  set date(value: any) {
    this._date = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }
}
