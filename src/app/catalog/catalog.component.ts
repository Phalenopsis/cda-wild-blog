import { Component, inject } from '@angular/core';
import { Article } from '../models/article.type';
import { ArticleService } from '../services/article.service';
import { ArticlePageComponent } from '../article-page/article-page.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ArticlePageComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  articles: Article[] = inject(ArticleService).getArticles();
}
