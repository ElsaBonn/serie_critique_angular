import { Injectable } from '@angular/core';
import {TvShow} from '../../models/tvshow.model';

import {CommentService} from '../comment/comment.service';
import {Comment} from '../../models/comment.model';


@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  tvShows: Array<TvShow>;
  comments: Array<Comment>;

  constructor() {
    this.comments = [
      new Comment (1,
        '2011-02-03',
        'Stringer Bell',
        'Si tout le monde vous répète en boucle depuis des années que vous devez voir The Wire, c’est peut-être qu’il y a de bonnes raisons derrière, comme on vient de le montrer. La série est considérée à peu près partout comme la meilleure de l’histoire, et même si cette affirmation est largement contestable, sa notoriété comme sa pertinence ne faiblissent pas avec le temps. Au contraire, la précision clinique de The Wire est toujours remontrée pour être étudiée et disséquée sous de nouveaux angles, on y fait référence un peu partout dans la pop culture, et plusieurs générations et catégories de spectateurs se l’approprient partout dans le monde.'),
      new Comment(2, '2015-09-30',
        'Mia',
        'C\'est le coeur gros qu\'on quitte les personnages de cette série formidable qui gardera son mystère jusqu\'au bout. Aussi réussie sur la forme que sur le fond, parfaiitement mise en scène et impeccablement interprétée. Mystérieuse, intriguante, poignante, l\'une des meilleures de ces dernières années...'),
      new Comment(3, '2021-01-01', 'Joe Strummer',
        'Natasha Lyonne est étonnante, sorte de Whoopi Goldberg moderne, perdue dans un monde facétieux qui ne cesse de la voir mourir sans lui rendre aucune réponse. Des réponses, il faudra sans doute attendre la seconde saison pour en obtenir, car il faut bien avouer que ces 8 épisodes plutôt rythmés, n\'avancent pas; Au point de se demander, mais quelle gueule aurait cette série, sans son actrice ?')
    ];

    this.tvShows = [
      new TvShow(1 ,
        'The Wire',
        '2002-06-02',
        'Un agent aux homicides et un détective aux narcotiques collaborent afin de démanteler une opération. La criminalité dans la ville de Baltimore, à travers la vision de ceux qui la vivent au quotidien.',
        'The Wire n’est pas une série télé comme les autres. Elle est la création d’un ancien journaliste du Baltimore Sun, véritablement obsédé par le réalisme de ce qu’il veut montrer, à savoir tout ce qui gangrène cette ville parmi les plus pauvres des Etats-Unis. Chaque saison aborde un thème différent (drogue, politique, école, médias…) ; et si la fibre sociale de The Wire en fait une vraie série politique, elle a surtout un aspect plus proche du documentaire.',
        'https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/smart/creativemedia-image.canalplus.pro/content/0001/25/e97f7d8e867a05feb9d2f0d7007a026df1e8efaa.png',
        [this.comments[0]]),
      new TvShow( 2,
          'The Leftovers',
                '2014-06-29',
        'Trois ans après la disparition soudaine de deux pour cent de la population mondiale, les résidents de Mapleton, dans l\'État de New York, s\'apprêtent à souligner la disparition de ces êtres chers.',
        'Le créateur de la série tentaculaire Lost et de la tant attendue nouveauté Watchmen, Damon Lindelof, est aussi à l’origine de l’une des plus grandes séries de la décennie : The Leftovers, inspirée par un roman de Tom Perrotta. Une œuvre, qui derrière une trame post 11 septembre, devient un miroir indéfinissable sur le deuil et un reflet sur les plus grandes peurs de notre société.' ,
        'https://www.benzinemag.net/wp-content/uploads/2019/12/The-Leftovers-S3-1024x683.jpg',
        [this.comments[1]]),
      new TvShow( 3 ,
        'Poupée Russe',
        '2019-02-01',
        'Nadia est piégée dans le temps. Elle revit le jour de son propre anniversaire et meurt à la fin de la fête, bien qu\'elle réapparaisse après chaque décès. Nadia essaie de découvrir pourquoi cela lui arrive.',
        'Russian Doll propose une construction et un récit virtuoses qui pratiquent l’ellipse, les boucles, le répétitif savamment varié. Angoissante autant que trépidante et drôle, Russian Doll a aussi pour qualité de donner à Natasha Lyonne un rôle à la mesure de son incroyable talent. Renaud Machart',
        'https://oblikon.net/wp-content/uploads/poupee-russe-netflix.png',
        [this.comments[2]])
    ];

  }

  /***
   *  Add a new TV Show
   */

  add(newTvShow: TvShow): Promise<void>{
    const cb = (res, rej) => {
      newTvShow.id = this.tvShows[this.tvShows.length - 1].id + 1;
      if (this.tvShows.length === 0){
        newTvShow.id = 1;
      }
      this.tvShows.push(newTvShow);
      res();
    };
    return new Promise<void>(cb);
  }

  /***
   * Search and Return tvShow by Id
   */

  getTvShowById(tvShowId: number): Promise<TvShow>{
   const cb = (res, rej) => {
      for (const tvShow of this.tvShows){
        if (tvShow.id === tvShowId) {
          res(tvShow);
        }

      }
    };
   return new Promise<TvShow>(cb);

  }

  /***
   * Edit a TvShow
   */

  edit(tvShowEdited: TvShow): Promise<string> {
    const cb = (res, rej) => {
      for (const [index, tvShow ] of this.tvShows.entries()) {
        if (tvShow.id === tvShowEdited.id) {
          this.tvShows[index] = tvShowEdited;
          res('La serie a été édité avec succès');
        }
      }
    };

    return new Promise<string>(cb);
  }

  /****
   * Delete a tvShow
   * tvShowId
   */

  delete(tvShowId: number): void {
    for (const [index, tvShow] of this.tvShows.entries()) {
      if (tvShow.id === tvShowId) {
        this.tvShows.splice(index , 1);
        break;
      }
    }
  }

  /**
   * Add a comment
   * new Date () for current date
   */
  addComment(newComment: Comment, tvShowComment: TvShow): Promise<void> {
    const cb = (res, rej) => {
      newComment.id = this.comments [this.comments.length - 1].id + 1;
      newComment.date = new Date ();
      tvShowComment.comments.push(newComment);
      res();
    };

    return new Promise<void>(cb);
  }



}

