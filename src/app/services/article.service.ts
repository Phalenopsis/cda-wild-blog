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
      image: 'assets/chat01.webp',
      isPublished: true,
      likes: 120
    },
    {
      id: 2,
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'assets/chat02.jpg',
      isPublished: true,
      likes: 75
    },
    {
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'assets/chat03.jpg',
      isPublished: true,
      likes: 200
    },
    {
      id: 4,
      title: 'Pourquoi manger du chocolat est bon pour la santé ?',
      author: 'Alice',
      content: 'Parce que',
      image: 'assets/chat04.jpg',
      isPublished: true,
      likes: 120
    },
    {
      id: 5,
      title: 'Développer une API RESTAURATION',
      author: 'Etchebest',
      content: 'Développer une API RESTAURATION nécessite...',
      image: 'assets/chat05.jpg',
      isPublished: true,
      likes: 75
    },
    {
      id: 6,
      title: 'Suis-je essentiel ?',
      author: 'Pilou',
      content: 'les loutres les gars !',
      image: 'assets/chat06.jpg',
      isPublished: true,
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
