# 🥋 DojoConnect

![DojoConnect ロゴ](https://via.placeholder.com/150x150.png?text=DojoConnect)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js%2014-000000?logo=Next.js)](https://nextjs.org/)
[![Powered by Firebase](https://img.shields.io/badge/Powered%20by-Firebase-FFCA28?logo=firebase)](https://firebase.google.com/)

DojoConnect（https://dojoc.io）は、伝統的な武道の精神と最新のテクノロジーを融合させ、道場運営を革新する次世代の総合プラットフォームです。

## 📚 目次

- [🌟 ビジョン](#-ビジョン)
- [🚀 主要機能](#-主要機能)
- [🛠️ 技術スタック](#️-技術スタック)
- [📂 プロジェクト構造](#-プロジェクト構造)
- [🏁 はじめ方](#-はじめ方)
- [🤝 貢献ガイドライン](#-貢献ガイドライン)
- [🧪 テスト](#-テスト)
- [📊 パフォーマンス](#-パフォーマンス)
- [🔐 セキュリティ](#-セキュリティ)
- [📜 ライセンス](#-ライセンス)
- [👥 チーム](#-チーム)
- [📞 お問い合わせ](#-お問い合わせ)

## 🌟 ビジョン

DojoConnectは、道場運営を革新し、武道家たちのコミュニティをグローバルに繋ぐことを目指します。私たちは、武道の実践者、指導者、道場経営者が、稽古に専念し、技術を磨き、精神を高められる環境を創造します。

## 🚀 主要機能

- 📊 AIを活用した高度な道場管理システム
- 🗓️ スマート予約・スケジュール管理
- 👥 インタラクティブな指導者-生徒マッチング
- 🏢 IoT連携による設備・備品の最適化管理
- 🎉 バーチャル道場でのグローバルイベント開催
- 💬 多言語対応のコミュニケーションプラットフォーム
- 📈 AIによる詳細なパフォーマンス分析・上達支援
- 🛒 ブロックチェーン活用の安全な物品管理・取引
- 🌐 バーチャル出稽古システム
- 👨‍🏫 AI支援による個別指導最適化
- 🔗 ウェアラブルデバイスとの連携
- 🏆 3D技術を用いた高度なトーナメント管理・観戦システム

## 🛠️ 技術スタック

- フロントエンド: [Next.js 14](https://nextjs.org/)
- バックエンド: [Firebase](https://firebase.google.com/)
- 認証: [NextAuth.js](https://next-auth.js.org/)
- スタイリング: [Tailwind CSS](https://tailwindcss.com/)
- ホスティング: [Vercel](https://vercel.com/)

## 📂 プロジェクト構造

以下は、DojoConnectプロジェクトの主要なディレクトリとファイルの構造です：

```
/app
├── layout.tsx                # 🏠 アプリ全体のレイアウトを定義
├── page.tsx                  # 🎭 ホームページのメインコンテンツ
├── (auth)                    # 🔐 認証関連ページをグループ化
│   ├── login
│   ├── register
│   ├── forgot-password
│   └── reset-password
├── dashboard                 # 📊 ユーザーダッシュボード機能
│   ├── page.tsx              # メインダッシュボード画面
│   ├── layout.tsx            # ダッシュボード専用レイアウト
│   ├── loading.tsx           # ローディング状態の表示
│   └── error.tsx             # エラー状態の表示
├── dojo                      # 🏯 道場管理機能
│   ├── [id]                  # 特定の道場ページと関連機能
│   ├── create                # 新規道場作成機能
│   └── page.tsx              # 道場一覧ページ
├── training                  # 🏋️ トレーニング管理機能
│   ├── [id]                  # 特定のトレーニング詳細と編集
│   ├── create                # 新規トレーニング記録作成
│   ├── log                   # トレーニングログ表示
│   └── analysis              # トレーニング分析ツール
├── events                    # 🎭 イベント管理機能
│   ├── [id]                  # 特定のイベント詳細、編集、参加者管理
│   ├── create                # 新規イベント作成
│   └── page.tsx              # イベント一覧ページ
├── schedule                  # 📅 スケジュール管理機能
│   ├── [date]                # 特定日のスケジュール
│   ├── week                  # 週間スケジュール表示
│   └── month                 # 月間スケジュール表示
├── profile                   # 👤 プロフィール管理機能
│   ├── [id]                  # ユーザープロフィール表示と実績
│   └── edit                  # プロフィール編集機能
├── rankings                  # 🏅 ランキング機能
│   ├── global                # グローバルランキング
│   ├── local                 # ローカル（道場内）ランキング
│   └── personal              # 個人の成長度ランキング
├── reports                   # 📊 レポート生成機能
│   ├── attendance            # 出席レポート
│   ├── performance           # パフォーマンスレポート
│   └── financial             # 財務レポート
├── settings                  # ⚙️ アプリ設定ページ
│   ├── account               # アカウント設定
│   ├── notifications         # 通知設定
│   └── privacy               # プライバシー設定
├── admin                     # 👑 管理者ページ
│   ├── users                 # ユーザー管理
│   ├── dojos                 # 道場管理
│   └── reports               # 管理者用レポート
└── api                       # 🚀 APIルート
    ├── auth                  # 認証関連API
    ├── dojo                  # 道場管理API
    ├── training              # トレーニング関連API
    ├── events                # イベント管理API
    ├── schedule              # スケジュール管理API
    ├── user                  # ユーザー情報API
    ├── rankings              # ランキング関連API
    ├── reports               # レポート生成API
    └── admin                 # 管理者用API

/components
├── ui                        # 🧩 再利用可能なUIコンポーネント
│   ├── Button
│   ├── Card
│   ├── Dialog
│   ├── Form
│   ├── Table
│   └── Tooltip
├── layout                    # 🏗️ レイアウト関連コンポーネント
│   ├── Header
│   ├── Footer
│   └── Sidebar
├── dojo                      # 🏯 道場関連の特殊コンポーネント
├── training                  # 🏋️ トレーニング関連コンポーネント
├── events                    # 🎭 イベント関連コンポーネント
├── schedule                  # 📅 スケジュール関連コンポーネント
├── profile                   # 👤 プロフィール関連コンポーネント
└── shared                    # 🔄 複数の機能で共有されるコンポーネント

/lib
├── firebase                  # 🔥 Firebase設定と接続管理
├── api                       # 🚀 APIクライアントとユーティリティ
├── hooks                     # 🎣 カスタムReactフック
├── context                   # 🌍 Reactコンテキスト
├── utils                     # 🛠️ 汎用ユーティリティ関数
└── constants                 # 📌 アプリ全体で使用される定数

/styles                       # 🎨 グローバルスタイルとテーマ設定

/public                       # 📂 静的ファイル（画像、フォント、ロケール）

/types                        # 📝 TypeScript型定義ファイル

/tests                        # 🧪 ユニット、統合、E2Eテスト

/scripts                      # 📜 開発・デプロイ用スクリプト

/docs                         # 📚 プロジェクトドキュメント

# 主要な設定ファイル
.env.local                    # 🔒 ローカル開発用環境変数
.env.production               # 🌐 本番環境用環境変数
next.config.js                # ⚙️ Next.js設定ファイル
package.json                  # 📦 プロジェクト依存関係と

スクリプト
tsconfig.json                 # 🔧 TypeScriptコンパイラ設定
README.md                     # 📖 プロジェクト説明（本ファイル）
CONTRIBUTING.md               # 🤝 貢献ガイドライン
LICENSE.md                    # 📄 ライセンス情報
opendevin_instructions.md     # 🤖 OpenDevin用開発指示と要件定義
```

この構造は、Next.js 14のApp Routerを最大限に活用し、機能ごとにモジュールを分離しています。各ディレクトリとファイルは特定の役割を持ち、アプリケーションの拡張性と保守性を高めています。

## 🏁 はじめ方

### 前提条件

- Node.js (v18以降)
- npm (v8以降)
- Firebase CLI

### インストール

1. リポジトリをクローンする
   ```
   git clone https://github.com/yukihamada/dojoc.git
   ```

2. 依存関係をインストールする
   ```
   cd dojoc
   npm install
   ```

3. 環境変数を設定する
   ```
   cp .env.example .env.local
   ```
   `.env.local`ファイルを編集し、Firebase、NextAuth.jsの設定を行ってください。

4. 開発サーバーを起動する
   ```
   npm run dev
   ```

5. http://localhost:3000 にアクセスして、アプリケーションが動作していることを確認してください。

## 🤝 貢献ガイドライン

DojoConnectは、オープンソースコミュニティの力を借りて成長しています。新機能の提案、バグ報告、ドキュメントの改善など、あらゆる形の貢献を歓迎します。詳しくは[貢献ガイドライン](CONTRIBUTING.md)をご覧ください。

### OpenDevin開発ガイドライン

本プロジェクトは、OpenDevinを使用した自立駆動開発を採用しています。開発者およびAIアシスタントは、以下のファイルに記載された指示に従って開発を進めてください：

- [`opendevin_instructions.md`](./opendevin_instructions.md): OpenDevin用の開発指示とガイドライン

このファイルには、プロジェクトの概要、技術スタック、開発ガイドライン、機能の優先順位、テスト要件、デプロイメント指示、ドキュメンテーション要件、コード品質基準が記載されています。新しく開発に参加する方は、まずこのファイルを熟読してください。

## 🧪 テスト

テストを実行するには以下のコマンドを使用します：

```
npm run test        # ユニットテストとインテグレーションテストを実行
npm run test:e2e    # E2Eテストを実行
```

## 📊 パフォーマンス

パフォーマンスの最適化は常に進行中です。最新のLighthouse scoreは以下の通りです：

- パフォーマンス: 95/100
- アクセシビリティ: 98/100
- ベストプラクティス: 100/100
- SEO: 100/100

## 🔐 セキュリティ

セキュリティに関する問題を発見した場合は、security@dojoconnect.io まで直接ご連絡ください。公開イシューでの報告は避けてください。

## 📜 ライセンス

DojoConnectは、[MITライセンス](LICENSE.md)のもとで公開されています。

## 👥 チーム

- 山田太郎 ([@yamada_taro](https://github.com/yamada_taro)) - プロジェクトリード

## 📞 お問い合わせ

- Webサイト: [https://dojoconnect.io](https://dojoconnect.io)
- GitHub: [https://github.com/dojoconnect/dojoconnect](https://github.com/dojoconnect/dojoconnect)
- Twitter: [@DojoConnect](https://twitter.com/DojoConnect)
- Discord: [DojoConnect Community](https://discord.gg/dojoconnect)
- メール: support@dojoconnect.io

技術的な質問やバグ報告は、GitHubイシューを通じてお願いします。その他のお問い合わせは、上記の連絡先をご利用ください。

---

⭐️ DojoConnectのビジョンに共感いただけましたら、GitHubリポジトリにスターを付けてサポートをお願いします！共に、武道の未来を創造しましょう。

WORKSPACE_BASE=$(pwd)/workspace/dojoconnect
docker run -it \
    --pull=always \
    -e SANDBOX_USER_ID=$(id -u) \
    -e WORKSPACE_MOUNT_PATH=$WORKSPACE_BASE \
    -v $WORKSPACE_BASE:/opt/workspace_base \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -p 3000:3000 \
    --add-host host.docker.internal:host-gateway \
    --name opendevin-app-$(date +%Y%m%d%H%M%S) \
    ghcr.io/opendevin/opendevin