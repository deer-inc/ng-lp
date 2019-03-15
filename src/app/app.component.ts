import { Component } from '@angular/core';
import { Lp } from 'projects/angular-lp/src/lib/lp';

import * as faker from 'faker/locale/ja';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: Lp = {
    title: faker.name.title(),
    owner: 'Deer, Inc',
    menues: [
      {
        label: 'GitHub',
        url: 'https://xxx.com'
      }
    ],
    contents: {
      hero: {
        mainText: 'デモデモ',
        subText: 'サブテキスト',
        actionLabel: 'はじめる',
        actionURL: 'xxx',
        coverURL: 'https://dummyimage.com/100x100.png'
      },
      concept: {
        body: 'コンセプト'
      },
      features: [
        {
          imageURL: 'https://dummyimage.com/100x100.png',
          title: 'aaaa',
          description: 'aaaa',
        },
        {
          imageURL: 'https://dummyimage.com/100x100.png',
          title: 'aaaa',
          description: 'aaaa',
        },
        {
          imageURL: 'https://dummyimage.com/100x100.png',
          title: 'aaaa',
          description: 'aaaa',
        },
        {
          imageURL: 'https://dummyimage.com/100x100.png',
          title: 'aaaa',
          description: 'aaaa',
        },
        {
          imageURL: 'https://dummyimage.com/100x100.png',
          title: 'aaaa',
          description: 'aaaa',
        },
        {
          imageURL: 'https://dummyimage.com/100x100.png',
          title: 'aaaa',
          description: 'aaaa',
        },
      ],
      services: [
        {
          imageURL: 'https://dummyimage.com/100x100.png',
          title: 'aaaa',
          description: 'aaaa',
        },
        {
          imageURL: 'https://dummyimage.com/100x100.png',
          title: 'aaaa',
          description: 'aaaa',
        },
      ],
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
      voices: [
        {
          name: faker.name.lastName() + ' ' + faker.name.firstName(),
          position: faker.name.jobTitle(),
          photoURL: faker.image.avatar(),
          comment: faker.lorem.paragraph()
        }
      ]
    }
  };
}
