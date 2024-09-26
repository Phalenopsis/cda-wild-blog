import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nicolas';
  articles = [
    {
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: 'Les nouveautés d\'Angular 16 incluent...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 120
    },
    {
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 75
    },
    {
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 200
    },
    {
      title: 'Pourquoi manger du chocolat est bon pour la santé ?',
      author: 'Alice',
      content: 'Parce que',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 120
    },
    {
      title: 'Développer une API RESTAURATION',
      author: 'Etchebest',
      content: 'Développer une API RESTAURATION nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 75
    },
    {
      title: 'Suis-je essentiel ?',
      author: 'Pilou',
      content: 'les loutres les gars !',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 20000
    }
  ];

  numberArticlePublished: number = this.calcNumberPublishedArticles();

  unpublish(index: number) {
    this.articles[index].isPublished = false;
    this.numberArticlePublished = this.calcNumberPublishedArticles();
  }

  calcNumberPublishedArticles() {
    let counter = 0;
    for (const article of this.articles) {
      if (article.isPublished) {
        counter += 1;
      }
    }
    return counter;
  }

}
