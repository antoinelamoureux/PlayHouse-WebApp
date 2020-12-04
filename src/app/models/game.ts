import { Note } from './note';
import { Category } from './category';
import { State } from './state';
import { Classification } from './classification';
import { Tag } from './tag';
import { Platform } from './platform';
import { Developper } from './developper';
import { Editor } from './editor';

export class Game {
    id: number;
    title: string;
    description: string;
    cover: string;
    addDate: string;
    releaseDate: string;
    price: string;
    note: Note;
    category: Category;
    state: State;
    classification: Classification;
    tagsCollection: Tag[];
    platformCollection: Platform[];
    idDevelopper: Developper[];
    idEditor: Editor[];
}