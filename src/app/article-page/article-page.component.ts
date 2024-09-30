import { Component, inject } from '@angular/core';
import { Article } from '../models/article.type';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  articleService: ArticleService = inject(ArticleService);
  articleId!: number;
  article!: Article;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    this.article = this.articleService.getArticleById(this.articleId);
    if (this.article === undefined) {
      this.router.navigate(['/not-found']);
    }
  }
}
