import { Component, OnInit } from '@angular/core';

import { Article, ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  latitutde: number = 51.678418;
  longitude: number = 7.809007;
  currentArticle: Article = undefined;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.currentArticle.subscribe(article => {
      this.currentArticle = article;
    }, err => {
      console.error(err);
    })
  }

  canEdit(): boolean {
    return true;
  }
}
