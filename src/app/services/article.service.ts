import { Injectable } from '@angular/core';
import { Article } from '../models/article.type';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[] = [
    {
      id: 1,
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: 'Les nouveautés d\'Angular 16 incluent...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 120
    },
    {
      id: 2,
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 75
    },
    {
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 200
    },
    {
      id: 4,
      title: 'Pourquoi manger du chocolat est bon pour la santé ?',
      author: 'Alice',
      content: 'Parce que',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 120
    },
    {
      id: 5,
      title: 'Développer une API RESTAURATION',
      author: 'Etchebest',
      content: 'Développer une API RESTAURATION nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 75
    },
    {
      id: 6,
      title: 'Suis-je essentiel ?',
      author: 'Pilou',
      content: 'les loutres les gars !',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 20000
    }
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article {
    return this.articles.find((article: Article) => article.id == id) as Article;
  }
}
