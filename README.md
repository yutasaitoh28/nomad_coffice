```
├── resources
│   ├── js
│   │   ├── frontend // ユーザー画面側で使用するファイル
│   │   │   └── components // Vueコンポーネント
│   │   │   └── app.js
│   │   │   └── bootstrap.js
│   │   ├── backend // 管理画面側で使用するファイル
│   │   │   └── // frontendディレクトリと同様の構成
│   │── lang
│   ├── sass
│   │   ├── frontend // ユーザー側のスタイル
│   │   │   ├── settings // 変数など
│   │   │   │   ├── _variables.scss // 変数定義
│   │   │   │   ├── _fonts.scss
│   │   │   ├── tools // mixin、function、@keyframes定義
│   │   │   │   ├── _mixins.scss // mixin定義
│   │   │   │   ├── _functions.scss // 関数定義
│   │   │   │   └── _animations.scss // @keyframes定義
│   │   │   ├── generic // リセットCSSなど、全体に適用するスタイル
│   │   │   │   ├── _reset.scss
│   │   │   │   └── _border-box.scss
│   │   │   │   └── _typography.scss
│   │   │   ├── elements // 要素セレクタに適用するスタイル
│   │   │   │   ├── _anchor.scss
│   │   │   │   └── ...
│   │   │   ├── objects // 装飾を持たない構造のみのスタイル
│   │   │   │   ├── _wrapper-container.scss
│   │   │   │   └── ...
│   │   │   ├── components // UIパーツ郡
│   │   │   │   ├── _link-button.scss
│   │   │   │   ├── _search-form.scss
│   │   │   │   └── _alert-box.scss
│   │   │   ├── pages // ページ固有のスタイル、UIパーツ配置
│   │   │   │   ├── _users.index.scss
│   │   │   │   ├── _users.create.scss
│   │   │   │   ├── _auth.login.scss
│   │   │   │   ├── _auth.logout.scss
│   │   │   │   └── ...
│   │   │   └── utilities // ユーティリテークラスを格納
│   │   │       └── _main.scss // メインファイル（肥大化に応じて、ファイル分け）
│   │   ├── backend // 管理画面側のスタイル
│   │   │   └── // frontendディレクトリと同様の構成
│   │── views
│   │── README.md
│   │
```

# CSSについて

## ■CSS設計
naming conventionとしてRSCSSを使用し、ディレクトリはITCSSのレイヤードアーキテクチャに倣うディレクトリ構成としています。

【参考】
 - [rscss](https://rscss.io/)  
 - [RSCSS というCSS設計について \- Qiita](https://qiita.com/kk6/items/760efba180ec526903db)
 - [Managing CSS Projects with ITCSS \- Speaker Deck](https://speakerdeck.com/dafed/managing-css-projects-with-itcss)
 - [ITCSSまとめ \- Qiita](https://qiita.com/makotot/items/2c3e99f15dca2789d403)

### ITCSSについて
ITCSS(Inverted Triangle CSS)はその名の通り逆三角形のレイヤー構造をベースにしたCSSアーキテクチャの設計方法です
上のレイヤーから下のレイヤーに行くに従って詳細度が高まり上のレイヤーに行くほど詳細度が下がり汎用的になります

### 命名規則について
RSCSSに準拠し、  
各コンポーネントは2単語以上、「-(ダッシュ)」区切りでの命名が必要となります。

### レイヤー（ディレクトリ）構成
順にレイヤー

#### ■ settings
グローバルな変数や設定を定義します。
例: breakpoints, color, spacing, utilities

#### ■ tools
scssのmixinやfunction、また「@keyframes」を定義します。
各ディレクトリに「_main.scss」を用意します。  
「_main.scss」に直接記述する形とし、肥大化に応じて、ファイル分割を検討してください。

#### ■ generic
リセットCSS含む、全体に適用したいスタイル（border-boxなど）を定義します。

#### ■ elements
要素（要素セレクタ）に対するスタイルを定義します。
例: h1, A, p

#### ■ objetcs
構造のみ（装飾なし）のスタイル、レイアウト用のスタイルを定義します。
このレイヤー以降でのみ、クラスセレクタが利用可能です。

#### ■ components
再利用可能なUIパーツを定義します。
明示的なクラス名をつけてください。
（見た目と命名が一致する）
またRSSCSの規約により「1コンポーネント・1ファイル」で作成してください。

#### ■ pages
ページ固有のスタイルなどを定義します。
例: `_users.create.scss`, `_users.edit.scss`

#### ■ utilities
ユーティリティークラスを定義します。  
プレフィックスに「_（アンダースコア）」を付与します。
また、「!important」の指定が可能です。
「_main.scss」に直接記述する形とし、肥大化に応じて、ファイル分割を検討してください。