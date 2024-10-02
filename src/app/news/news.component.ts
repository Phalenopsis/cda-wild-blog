import { Component, Input } from '@angular/core';
import { Article } from '../models/article.type';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  @Input()
  article!: Article;
}
