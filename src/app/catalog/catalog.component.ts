import { Component, DestroyRef, inject } from '@angular/core';
import { Article } from '../models/article.type';
import { ArticleService } from '../services/article.service';
import { ArticlePageComponent } from '../article-page/article-page.component';
import { RouterLink } from '@angular/router';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ArticlePageComponent, RouterLink, NewsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  articles: Article[] = inject(ArticleService).getArticles();
  articlesLiked: Article[] = [];
  destroyRef: DestroyRef = inject(DestroyRef);

  handleLike(likedArticle: Article) {
    this.articlesLiked.push(likedArticle);
  }
}
