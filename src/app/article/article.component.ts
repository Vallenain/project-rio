import { Component, OnInit } from '@angular/core';

import { Article, ArticleService } from './article.service';
import { User, UserService } from './../user/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  latitutde: number = 51.678418;
  longitude: number = 7.809007;
  currentArticle: Article = undefined;
  currentUser: User = undefined;

  constructor(private articleService: ArticleService,
    private userService: UserService) { }

  ngOnInit() {
    this.articleService.currentArticle.subscribe(article => {
      this.currentArticle = article;
    }, err => {
      console.error(err);
    })

    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
    }, err => {
      console.error(err);
    })
  }

  canEdit(): boolean {
    return this.currentUser !== undefined
      && this.currentArticle !== undefined
      && this.currentUser.email === this.currentArticle.author.email;
  }

  checkParagraphIndex(index) {
    return this.currentArticle !== undefined
      && this.currentArticle.paragraphs.length > 0
      && index >=0
      && index <= this.currentArticle.paragraphs.length - 1;
  }

  moveParagaphUp(index) {
    if(this.checkParagraphIndex(index - 1)) {
      let thisParagraph = this.currentArticle.paragraphs[index];
      let previousParagraph = this.currentArticle.paragraphs[index - 1];
      this.currentArticle.paragraphs[index] = previousParagraph;
      this.currentArticle.paragraphs[index - 1] = thisParagraph;
    }
  }

  moveParagaphDown(index) {
    if(this.checkParagraphIndex(index + 1)) {
      let thisParagraph = this.currentArticle.paragraphs[index];
      let nextParagraph = this.currentArticle.paragraphs[index + 1];
      this.currentArticle.paragraphs[index] = nextParagraph;
      this.currentArticle.paragraphs[index + 1] = thisParagraph;
    }
  }
  editParagraph(index) {
    if(this.checkParagraphIndex(index)) {
      alert('not implemented yet')
    }
  }

  deleteParagraph(index) {
    if(this.checkParagraphIndex(index)) {
      this.currentArticle.paragraphs.splice(index, 1);
    }
  }
}
