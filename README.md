[![Build Status](https://travis-ci.com/deer-inc/ng-lp.svg?branch=master)](https://travis-ci.com/deer-inc/ng-lp)
[![Coverage Status](https://coveralls.io/repos/github/deer-inc/ng-lp/badge.svg?branch=master)](https://coveralls.io/github/deer-inc/ng-lp?branch=master)
![npm](https://img.shields.io/npm/v/@deer-inc/ng-lp.svg)
![GitHub](https://img.shields.io/github/license/deer-inc/ng-lp.svg)

# NGLP

NGLPライブラリを使えばデータバインドでモダンなLPをデータバインドのみで作成できます。

[Demo](https://deer-inc.github.io/ng-lp/)

## Usage

Componentでデータを設計し、HTMLで `ng-lp` コンポーネントにバインドするだけです。

App.component.ts

```js
export class AppComponent {
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
        actionLabel: 'デモを見る',
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
      ]
    }
  };

  action() {
    // ヒーローコンポーネントのアクションボタンをクリックした時に実行されます
  }
}
```

App.component.html

```html
<ng-lp (handleClickAction)="action()" [data]="data"></ng-lp>
```

### ポイント

- bodyスタイルには干渉しないので、適宜 `style.scss` に `marign: 0` などを加え、外部との余白を調整してください。

### データ構造

プロパティ|必須|説明
---|---|---
title|✔️|ヘッダータイトル
owner|✔️|フッターのコピーライト（会社名、個人名）
attributions||素材利用などのライセンス表記
account||SNSアカウント（GitHub,twitter,facebook）
menues||ヘッダーメニュー
hero||ヒーロセクション（メインビジュアル）
concept||コンセプトセクション
features||特徴セクション
medias||メディア掲載、ブランドセクション
faqs||FAQセクション
voices||ユーザーボイスセクション

セクション追加のPRや要望Issueはお気軽に。

### イベント

イベント|**説明**
---|---
handleClickAction|メインビジュアルのボタンをクリックしたら発生

## 開発

```
ng build ng-lp --watch
ng s
```

- `./projects/ng-lp/` 配下がライブラリ本体であり、編集対象となります。
- PR大歓迎です。
- 機能やデザインテーマ、セクション追加（調整）の要望はIssueでお待ちしています。
