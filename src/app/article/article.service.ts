import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

import { Author } from './../user/author.service';

@Injectable()
export class ArticleService {

  currentArticle: BehaviorSubject<Article> = new BehaviorSubject(undefined);

  constructor() {
    this._init();
  }

  _init(): void {
    Observable.of({
      title: 'Journey of a dwarf',
      paragraphs: [{
        type: 'text',
        content: {
          text: "For an author/illustrator, it was at a book party with a famous illustrator;“I introduce myself to him,” she writes, “and he makes a crack about my breasts.” After enough incidents like these she’s “completely stopped socializing in this business because each time it becomes another abuse story.”"
        }
      }, {
        type: 'map',
        content: {
          center: {
            lat: 51.678418,
            lng: 7.809007
          },
          zoom: 8
        }
      }, {
        type: 'picture',
        content: {
          src: '/assets/pix.jpg',
          captions : [
            {
              text: 'Pão de Acucar, RJ',
              isLocation: true
            },
            {
              text: 'Going - literally - high',
            }
          ]
        }
      }, {
        type: 'picture',
        content: {
          src: '/assets/pix2.jpg'
        }
      }],
      author: {
        name: 'Val le nain',
        picture: 'http://s2.dmcdn.net/B4D0w/240x240-A66.jpg',
        description: 'Yet another nain (from Lyon)'
      },
      date: new Date()
    }).subscribe(article => this.currentArticle.next(article));
  }
}

export interface Article {
  title: string;
  paragraphs: Paragraph[],
  author: Author;
  date: Date;
}

export interface Paragraph {
  type: string;
  content: TextContent | MapContent | PictureContent;
}

export interface TextContent {
  text: string;
}

export interface MapContent {
  center: any;
  zoom: number;
}

export interface PictureContent {
  src: string;
  captions?: PictureCaption[];
}

export interface PictureCaption {
  text: string;
  isLocation?: boolean;
}

