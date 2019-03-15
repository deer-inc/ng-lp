import { Component } from '@angular/core';
import { Lp, Voice, Feature, Service } from 'projects/angular-lp/src/lib/lp';

import * as faker from 'faker/locale/ja';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: Lp = {
    title: 'NGLP',
    owner: 'Deer, Inc',
    menues: [
      {
        label: 'GitHub',
        url: 'https://xxx.com'
      }
    ],
    contents: {
      hero: {
        mainText: faker.lorem.sentence(4),
        subText: faker.lorem.lines(),
        actionLabel: 'はじめる',
        actionURL: 'xxx',
        coverURL: faker.image.imageUrl(1800, 1000)
      },
      concept: {
        title: faker.lorem.sentence(5),
        description: faker.lorem.paragraph()
      },
      features: this.getFeatures(8),
      services: this.getServices(8),
      medias: [
        {
          name: 'aaa',
          logoURL: 'https://dummyimage.com/300x100.png',
          website: ''
        },
        {
          name: 'aaa',
          logoURL: 'https://dummyimage.com/300x100.png',
          website: ''
        },
        {
          name: 'aaa',
          logoURL: 'https://dummyimage.com/300x100.png',
          website: ''
        },
        {
          name: 'aaa',
          logoURL: 'https://dummyimage.com/300x100.png',
          website: ''
        },
        {
          name: 'aaa',
          logoURL: 'https://dummyimage.com/300x100.png',
          website: ''
        },
        {
          name: 'aaa',
          logoURL: 'https://dummyimage.com/300x100.png',
          website: ''
        },
        {
          name: 'aaa',
          logoURL: 'https://dummyimage.com/300x100.png',
          website: ''
        },
        {
          name: 'aaa',
          logoURL: 'https://dummyimage.com/300x100.png',
          website: ''
        },
      ],
      faqs: [
        {
          question: '入力したデータはデータベースに保存されますか？',
          answer: 'されません。ローカルストレージで管理されます。',
        }
      ],
      voices: this.getVoices(6)
    }
  };

  getVoices(count: number): Voice[] {
    const result = [];
    while (count--) {
      result.push({
        name: faker.name.lastName() + ' ' + faker.name.firstName(),
        position: faker.name.jobTitle(),
        photoURL: faker.image.avatar(),
        comment: faker.lorem.lines(3)
      });
    }
    return result;
  }

  getFeatures(count: number): Feature[] {
    const result = [];
    while (count--) {
      result.push({
        imageURL: faker.image.image(),
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
      });
    }
    return result;
  }

  getServices(count: number): Service[] {
    const result = [];
    while (count--) {
      result.push({
        imageURL: faker.image.image(),
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
      });
    }
    return result;
  }
}
