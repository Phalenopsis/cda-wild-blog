import { Component, inject, Input } from '@angular/core';
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
  @Input()
  article!: Article;
}
