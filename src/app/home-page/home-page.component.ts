import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article.type';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  articleService: ArticleService = inject(ArticleService);
  articles: Article[] = this.articleService.getArticles();
}
