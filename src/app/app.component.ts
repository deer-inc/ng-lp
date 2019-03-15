import { Component } from '@angular/core';
import { Lp, Voice, Feature, Service, Media } from 'projects/angular-lp/src/lib/lp';

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
    account: {
      gitHub: 'https://github.com/deer-inc/ng-lp',
      twitter: 'https://twitter.com/d151005'
    },
    contents: {
      hero: {
        mainText: 'データをわたせば、できあがり。',
        subText: '５分でLPが作れる、Angularライブラリ',
        actionLabel: 'はじめる',
        actionURL: 'xxx',
        coverURL: './assets/hero.svg'
      },
      concept: {
        title: 'モダンなLPをサクッと作りたいあなたに',
        description: 'OSSやMVPを作ったあと、その魅力を伝えるLPが必要になります。このライブラリを使えば必要な項目をデータで渡すだけでLPが完成します。このページもNGLPで作られています。',
        clipURL: './assets/concept.png'
      },
      features: [
        {
          imageURL: faker.image.image(),
          title: 'オープンソース',
          description: 'NGLPはオープンソース(OSS)です。PRは常に歓迎されています。バグや要望があれば気軽にIssueを立ててください。',
          actionLabel: 'GitHubリポジトリ',
          actionURL: 'https://github.com/deer-inc/ng-lp'
        },
        {
          imageURL: faker.image.image(),
          title: 'MITライセンス',
          description: 'MITライセンスなので商用利用はもちろん、自由に複製、改変をすることができます。もちろん無料です。',
        },
        {
          imageURL: faker.image.image(),
          title: '豊富なセクション',
          description: 'メインビジュアル、ユーザーボイス、メディア掲載、特徴やコンセプトなど頻出セクションを網羅しています。',
        },
        {
          imageURL: faker.image.image(),
          title: 'マテリアルデザイン',
          description: 'マテリアルデザインとWeb標準に沿ったRWD設計なので、高い閲覧性が担保されています。',
        },
        {
          imageURL: faker.image.image(),
          title: '柔軟なカスタマイズ',
          description: 'カスタムセクションの追加やデザインカスタマイズが可能です。',
        },
        {
          imageURL: faker.image.image(),
          title: 'シンプルなインターフェイス',
          description: '決まったフォーマットでデータをバインドするだけなので、学習コストは一切必要ありません。',
        },
        {
          imageURL: faker.image.image(),
          title: '軽量なライブラリ',
          description: '依存ライブラリを削り、軽量なライブラリであることをテーマにしています。',
        },
      ],
      medias: [
        {
          name: '株式会社Deer',
          logoURL: './assets/deer.svg',
          website: 'https://deer.co.jp'
        }
      ],
      faqs: [
        {
          question: '入力したデータはデータベースに保存されますか？',
          answer: 'されません。ローカルストレージで管理されます。',
        }
      ],
      voices: this.getVoices(6),
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
}
