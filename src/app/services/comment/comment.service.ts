import { Injectable } from '@angular/core';
import {Comment} from '../../models/comment.model';
import {TvshowService} from '../tvshow/tvshow.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

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

  }


}
