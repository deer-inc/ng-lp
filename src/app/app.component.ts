import { Component } from '@angular/core';
import { Lp, Voice, Feature } from 'projects/ng-lp/src/lib/lp';

import * as faker from 'faker/locale/ja';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isEditable: boolean;

  data: Lp = {
    title: 'NGLP',
    owner: 'Deer, Inc',
    attributions: [
      'Free Vectors via <a target="_blank" href="https://www.vecteezy.com/">vecteezy.com</a>'
    ],
    account: {
      gitHub: 'https://github.com/deer-inc/ng-lp',
      twitter: 'https://twitter.com/d151005'
    },
    menues: [
      {
        label: 'ドキュメント',
        url: 'https://github.com/deer-inc/ng-lp/wiki'
      }
    ],
    contents: {
      hero: {
        mainText: 'データをわたせば、できあがり。',
        subText: '５分でLPが作れる、Angularライブラリ',
        actionLabel: '編集してみる',
        coverURL: './assets/hero.jpg'
      },
      concept: {
        title: 'モダンなLPをサクッと作りたいあなたに',
        description: 'OSSやMVPを作ったあと、その魅力を伝えるLPが必要になります。このライブラリを使えば必要な項目をデータで渡すだけでLPが完成します。このページもNGLPで作られています。',
        clipURL: './assets/concept.png'
      },
      features: [
        {
          imageURL: './assets/octocat.png',
          title: 'オープンソース',
          description: 'NGLPはオープンソース(OSS)です。PRは常に歓迎されています。バグや要望があれば気軽にIssueを立ててください。',
          actionLabel: 'GitHubリポジトリ',
          actionURL: 'https://github.com/deer-inc/ng-lp'
        },
        {
          imageURL: './assets/mit.png',
          title: 'MITライセンス',
          description: 'MITライセンスなので商用利用はもちろん、自由に複製、改変をすることができます。もちろん無料です。',
        },
        {
          imageURL: './assets/blocks.svg',
          title: '豊富なセクション',
          description: 'メインビジュアル、ユーザーボイス、メディア掲載、特徴やコンセプトなど頻出セクションを網羅しています。',
        },
        {
          imageURL: './assets/material.png',
          title: 'マテリアルデザイン',
          description: 'マテリアルデザインとWeb標準に沿ったRWD設計なので、高い閲覧性が担保されています。',
        },
        {
          imageURL: './assets/customize.svg',
          title: '柔軟なカスタマイズ',
          description: 'カスタムセクションの追加やデザインカスタマイズが可能です。',
        },
        {
          imageURL: './assets/bracket.svg',
          title: 'シンプルなインターフェイス',
          description: '決まったフォーマットでデータをバインドするだけなので、学習コストは一切必要ありません。',
        },
        {
          imageURL: './assets/lightweight.svg',
          title: '軽量なライブラリ',
          description: '依存ライブラリを削った軽量なライブラリなので低コストで導入できます。',
        },
        {
          imageURL: './assets/shield.svg',
          title: '堅牢なメンテナンス',
          description: '営利企業で実際に採用されているライブラリなので、恒久的にリリース可能なクオリティでメンテナンスされます。',
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
          question: 'Pull Requestは受け付けていますか？',
          answer: 'はい。Pull Request以外に、機能追加の要望やバグ報告のIssueも大歓迎です 🥳',
        },
        {
          question: 'どんな外部リソースに依存していますか？',
          answer: '現時点ではFontAwesomeやGoogle Noto Sansのみです。',
        },
        {
          question: 'テンプレートは増やせますか？',
          answer: 'はい。新しいデザインテンプレートだけでなくセクションの追加やデザインテンプレートのブラッシュアップも大歓迎です。',
        },
        {
          question: 'どういうシーンで使うものですか？',
          answer: '特にAngularでOSSやMVPを作ったとき、その入り口となるLPが必要になります。HTML, CSSコーディングをしなくてもそれがサクッと作れるようにNGLPを作りました。',
        },
      ],
      voices: this.getVoices(6),
    }
  };

  dataField: FormControl = new FormControl(
    this.stringifyData()
  );

  isError: boolean;

  constructor() {
    this.dataField.valueChanges.subscribe(data => {
      this.data = this.parseData(data);
    });
  }

  stringifyData() {
    let result;
    try {
      result = JSON.stringify(this.data, null, '    ')
    } catch {
      this.isError = true;
      return '';
    }
    this.isError = false;
    return result;
  }

  parseData(data) {
    let result;
    try {
      result = JSON.parse(data);
    } catch {
      this.isError = true;
      return {
        title: 'データが不正です',
        owner: 'error'
      };
    }
    this.isError = false;
    return result;
  }

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
}
