# DojoConnect

## プロジェクト概要

武道道場の管理とコミュニティのためのプラットフォーム

## 技術スタック

- Next.js 14
- Firebase
- NextAuth.js
- Tailwind CSS

## ファイル構造

## 📁 /app

- `layout.tsx` # 🏠 アプリ全体のレイアウトを定義
- `main.tsx` # 🎭 ホームページのメインコンテンツ
- **api/** # 🚀 APIルート
  - **auth/** # 🔐 Auth0関連のAPIルート
    - [...auth0]
      - `route.ts` # Auth0のダイナミックAPIルート
  - **dojo/** # 道場管理API
    - `route.ts` # 道場一覧取得、作成
    - **[id]**
      - `route.ts` # 特定の道場の取得、更新、削除
  - **training/** # トレーニング関連API
    - `route.ts` # トレーニング一覧取得、作成
    - **[id]**
      - `route.ts` # 特定のトレーニングの取得、更新、削除
  - **events/** # イベント管理API
    - `route.ts` # イベント一覧取得、作成
    - **[id]**
      - `route.ts` # 特定のイベントの取得、更新、削除
  - **schedule/** # スケジュール管理API
    - `route.ts` # スケジュール取得、更新
  - **user/** # ユーザー情報API
    - `route.ts` # ユーザー一覧取得
    - **[id]**
      - `route.ts` # 特定のユーザーの取得、更新
  - **rankings/** # ランキング関連API
    - `route.ts` # ランキング取得
  - **reports/** # レポート生成API
    - `route.ts` # レポート生成、取得
  - **messages/** # メッセージングAPI
    - `route.ts` # メッセージ一覧取得、送信
    - **[id]**
      - `route.ts` # 特定のメッセージの取得、更新
  - **payments/** # 支払い管理API
    - `route.ts` # 支払い処理、履歴取得
  - **techniques/** # 技術ライブラリAPI
    - `route.ts` # 技術一覧取得
    - **[id]**
      - `route.ts` # 特定の技術の取得、更新
  - **health/** # 健康管理API
    - `route.ts` # 健康データ記録、取得
  - **goals/** # 目標管理API
    - `route.ts` # 目標一覧取得、作成
    - **[id]**
      - `route.ts` # 特定の目標の取得、更新
  - **forum/** # フォーラムAPI
    - `route.ts` # スレッド一覧取得、作成
    - **[id]**
      - `route.ts` # 特定のスレッドの取得、更新
  - **belts/** # 帯管理API
    - `route.ts` # 帯情報取得、更新
  - **exchanges/** # 道場間交流API
    - `route.ts` # 交流イベント取得、作成
  - **certifications/** # 指導者認定API
    - `route.ts` # 認定一覧取得
    - **[id]**
      - `route.ts` # 特定の認定の取得、更新
  - **equipment/** # 武具・道具管理API
    - `route.ts` # 装備一覧取得、更新
  - **nutrition/** # 栄養・食事管理API
    - `route.ts` # 栄養データ記録、取得
  - **media/** # メディアギャラリーAPI
    - `route.ts` # メディア一覧取得、アップロード
    - **[id]**
      - `route.ts` # 特定のメディアの取得、更新
  - **philosophy/** # 武道理論・哲学API
    - `route.ts` # 哲学コンテンツ取得
  - **i18n/** # 多言語サポートAPI
    - `route.ts` # 翻訳データ取得
  - **admin/** # 管理者用API
    - **users**
      - `route.ts` # ユーザー管理
    - **dojos**
      - `route.ts` # 道場管理
    - **reports**
      - `route.ts` # 管理者用レポート
- **dashboard/** # 📊 ユーザーダッシュボード機能
- `main.tsx` # 📊 メインダッシュボード画面
  - `layout.tsx` # 📊 ダッシュボード専用レイアウト
  - `loading.tsx` # ⏳ ローディング状態の表示
  - `error.tsx` # ❌ エラー状態の表示
- **dojo/** # 🏯 道場管理機能
  - **[id]** # 🏯 特定の道場ページと関連機能
- `main.tsx` # 道場詳細ページ
    - `edit.tsx` # 道場編集ページ
  - **create** # 🆕 新規道場作成機能
- `main.tsx` # 新規道場作成ページ
- `main.tsx` # 📋 道場一覧ページ
- **training/** # 🏋️ トレーニング管理機能
  - **[id]** # 🏋️ 特定のトレーニング詳細と編集
- `main.tsx` # 特定のトレーニング詳細ページ
    - `edit.tsx` # トレーニング編集ページ
  - **create** # 🆕 新規トレーニング記録作成
- `main.tsx` # 新規トレーニング記録作成ページ
  - **log** # 📝 トレーニングログ表示
- `main.tsx` # トレーニングログ表示ページ
  - **analysis** # 📈 トレーニング分析ツール
- `main.tsx` # トレーニング分析ツールページ
- **events/** # 🎭 イベント管理機能
  - **[id]** # 🎭 特定のイベント詳細、編集、参加者管理
- `main.tsx` # 特定のイベント詳細ページ
    - `edit.tsx` # イベント編集ページ
  - **create** # 🆕 新規イベント作成
- `main.tsx` # 新規イベント作成ページ
- `main.tsx` # 📋 イベント一覧ページ
- **schedule/** # 📅 スケジュール管理機能
  - **[date]** # 📅 特定日のスケジュール
- `main.tsx` # 特定日のスケジュールページ
  - **week** # 📆 週間スケジュール表示
- `main.tsx` # 週間スケジュール表示ページ
  - **month** # 📅 月間スケジュール表示
- `main.tsx` # 月間スケジュール表示ページ
- **profile/** # 👤 プロフィール管理機能
  - **[id]** # 👤 ユーザープロフィール表示と実績
- `main.tsx` # ユーザープロフィール表示ページ
  - **edit** # ✏️ プロフィール編集機能
- `main.tsx` # プロフィール編集ページ
- **rankings/** # 🏅 ランキング機能
  - **global** # 🌍 グローバルランキング
- `main.tsx` # グローバルランキングページ
  - **local** # 🏠 ローカル（道場内）ランキング
- `main.tsx` # ローカルランキングページ
  - **personal** # 📈 個人の成長度ランキング
- `main.tsx` # 個人の成長度ランキングページ
- **reports/** # 📊 レポート生成機能
  - **attendance** # 📋 出席レポート
- `main.tsx` # 出席レポートページ
  - **performance** # 📈 パフォーマンスレポート
- `main.tsx` # パフォーマンスレポートページ
  - **financial** # 💰 財務レポート
- `main.tsx` # 財務レポートページ
- **settings/** # ⚙️ アプリ設定ページ
  - **account** # 👤 アカウント設定
- `main.tsx` # アカウント設定ページ
  - **notifications** # 🔔 通知設定
- `main.tsx` # 通知設定ページ
  - **privacy** # 🔒 プライバシー設定
- `main.tsx` # プライバシー設定ページ
- **admin/** # 👑 管理者ページ
  - **users** # 👥 ユーザー管理
- `main.tsx` # ユーザー管理ページ
  - **dojos** # 🏯 道場管理
- `main.tsx` # 道場管理ページ
  - **reports** # 📊 管理者用レポート
- `main.tsx` # 管理者用レポートページ
- `messages/` # 💬 メッセージング機能
- `payments/` # 💰 支払い・会費管理
- `techniques/` # 📚 技術ライブラリ
- `health/` # 🩺 健康・怪我管理
- `goals/` # 🎯 目標設定と進捗管理
- `forum/` # 🗣️ コミュニティフォーラム
- `belts/` # 🥋 帯管理
- `exchanges/` # 🤝 道場間交流
- `certifications/` # 🏅 指導者認定システム
- `equipment/` # 🥋 武具・道具管理
- `nutrition/` # 🍎 栄養・食事管理
- `media/` # 📸 メディアギャラリー
- `philosophy/` # 🧘 武道理論・哲学
- `i18n/` # 🌐 多言語サポート

## 📁 /components

- **ui/** # 🧩 再利用可能なUIコンポーネント
  - **Button**
    - `index.tsx` # ボタンコンポーネント
  - **Card**
    - `index.tsx` # カードコンポーネント
  - **Dialog**
    - `index.tsx` # ダイアログコンポーネント
  - **Form**
    - `index.tsx` # フォームコンポーネント
  - **Table**
    - `index.tsx` # テーブルコンポーネント
  - **Tooltip**
    - `index.tsx` # ツールチップコンポーネント
- **layout/** # 🏗️ レイアウト関連コンポーネント
  - **Header**
    - `index.tsx` # ヘッダーコンポーネント
  - **Footer**
    - `index.tsx` # フッターコンポーネント
  - **Sidebar**
    - `index.tsx` # サイドバーコンポーネント
- **dojo** # 🏯 道場関連の特殊コンポーネント
  - `DojoCard.tsx` # 道場カードコンポーネント
  - `DojoList.tsx` # 道場リストコンポーネント
- **training** # 🏋️ トレーニング関連コンポーネント
  - `TrainingForm.tsx` # トレーニングフォームコンポーネント
  - `TrainingCalendar.tsx` # トレーニングカレンダーコンポーネント
- **events** # 🎭 イベント関連コンポーネント
  - `EventCard.tsx` # イベントカードコンポーネント
  - `EventList.tsx` # イベントリストコンポーネント
- **schedule** # 📅 スケジュール関連コンポーネント
  - `ScheduleCalendar.tsx` # スケジュールカレンダーコンポーネント
- **profile** # 👤 プロフィール関連コンポーネント
  - `ProfileCard.tsx` # プロフィールカードコンポーネント
- **messages** # 💬 メッセージング関連コンポーネント
  - `MessageList.tsx` # メッセージリストコンポーネント
- **payments** # 💰 支払い関連コンポーネント
  - `PaymentForm.tsx` # 支払いフォームコンポーネント
- **techniques** # 📚 技術ライブラリ関連コンポーネント
  - `TechniqueCard.tsx` # 技術カードコンポーネント
- **health** # 🩺 健康管理関連コンポーネント
  - `HealthForm.tsx` # 健康フォームコンポーネント
- **goals** # 🎯 目標管理関連コンポーネント
  - `GoalForm.tsx` # 目標フォームコンポーネント
- **forum** # 🗣️ フォーラム関連コンポーネント
  - `ThreadList.tsx` # スレッドリストコンポーネント
- **belts** # 🥋 帯管理関連コンポーネント
  - `BeltCard.tsx` # 帯カードコンポーネント
- **exchanges** # 🤝 道場間交流関連コンポーネント
  - `ExchangeEvent.tsx` # 交流イベントコンポーネント
- **certifications** # 🏅 指導者認定関連コンポーネント
  - `CertificationCard.tsx` # 認定カードコンポーネント
- **equipment** # 🥋 武具・道具管理関連コンポーネント
  - `EquipmentList.tsx` # 装備リストコンポーネント
- **nutrition** # 🍎 栄養・食事管理関連コンポーネント
  - `NutritionForm.tsx` # 栄養フォームコンポーネント
- **media** # 📸 メディアギャラリー関���コンポーネント
  - `MediaGallery.tsx` # メディアギャラリーコンポーネント
- **philosophy** # 🧘 武道理論・哲学関連コンポーネント
  - `PhilosophyArticle.tsx` # 哲学記事コンポーネント
- **i18n** # 🌐 多言語サポート関連コンポーネント
  - `LanguageSelector.tsx` # 言語選択コンポーネント
- **shared** # 🔄 複数の機能で共有されるコンポーネント
  - `LoadingSpinner.tsx` # ローディングスピナーコンポーネント

## 📁 /lib

- **auth0** # 🔑 Auth0設定と接続管理
  - `config.ts` # Auth0設定
  - `client.ts` # Auth0クライアントユーティリティ
- **api** # 🚀 APIクライアントとユーティリティ
  - `client.ts` # APIクライアント
  - `endpoints.ts` # APIエンドポイント定義
- **hooks** # 🎣 カスタムReactフック
  - `useAuth.ts` # 認証カスタムフック
  - `useDojos.ts` # 道場データ取得カスタムフック
- **context** # 🌍 Reactコンテキスト
  - `AuthContext.tsx` # 認証コンテキスト
  - `ThemeContext.tsx` # テーマコンテキスト
- **utils** # 🛠️ 汎用ユーティリティ関数
  - `date.ts` # 日付ユーティリティ関数
  - `validation.ts` # バリデーションユーティリティ関数
- **i18n** # 🌐 多言語サポートユーティリティ
  - `translations.ts` # 翻訳ユーティリティ
- **constants** # 📌 アプリ全体で使用される定数
  - `routes.ts` # ルート定数
  - `apiPaths.ts` # APIパス定数

## 📁 /styles

- グローバルスタイルとテーマ設定 🎨

## 📁 /public

- 静的ファイル（画像、フォント、ロケール） 📂

## 📁 /types

- TypeScript型定義ファイル 📝

## 📁 /tests

- ユニット、統合、E2Eテスト 🧪

## 📁 /scripts

- 開発・デプロイ用スクリプト 📜

## 📁 /docs

- プロジェクトドキュメント 📚

## 主要な設定ファイル

- `.env.local` # 🔒 ローカル開発用環境変数（Auth0の設定を含む）
- `.env.production` # 🌐 本番環境用環境変数（Auth0の設定を含む）
- `next.config.js` # ⚙️ Next.js設定ファイル（Auth0の設定を含む可能性あり）
- `package.json` # 📦 プロジェクト依存関係とスクリプト
- `tsconfig.json` # 🔧 TypeScriptコンパイラ設定
- `README.md` # 📖 プロジェクト説明（本ファイル）
- `CONTRIBUTING.md` # 🤝 貢献ガイドライン
- `LICENSE.md` # 📄 ライセンス情報
- `opendevin_instructions.md` # 🤖 OpenDevin用開発指示と要件定義

## 🤝 貢献ガイドライン

DojoConnectは、オープンソースコミュニティの力を借りて成長しています。新機能の提案、バグ報告、ドキュメントの改善など、あらゆる形の貢献を歓迎します。詳しくは[貢献ガイドライン](CONTRIBUTING.md)をご覧ください。

### OpenDevin開発ガイドライン

本プロジェクトは、OpenDevinを使用した自立駆動開発を採用しています。開発者およびAIアシスタントは、以下のファイルに記載された指示に従って開発を進めてください：

- [`opendevin_instructions.md`](./opendevin_instructions.md): OpenDevin用の開発指示とガイドライン

⭐️ DojoConnectのビジョンに共感いただけましたら、GitHubリポジトリにスターを付けてサポートをお願いします！共に、武道の未来を創造しましょう。

## 🚀 OpenDevinの起動コマンド

以下のコマンドを使用してOpenDevinを起動します：

```bash
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
```

## Auth0の設定

1. Auth0アカウントを作成し、アプリケーションを設定します。
2. Auth0ダッシュボードで、クライアントIDとクライアントシークレットを取得します。
3. 以下の環境変数を設定します。

```bash
AUTH0_DOMAIN=your-auth0-domain
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
```

4. `next-auth`の設定ファイルを更新し、Auth0を使用するようにします。

```javascript
// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
  ],
});
```

# DojoConnect

## プロジェクト概要

武道道場の管理とコミュニティのためのプラットフォーム

## 技術スタック

- Next.js 14
- Firebase
- NextAuth.js
- Tailwind CSS

## ファイル構造

```
DojoConnect/
├── README.md
├── src/
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── auth/
│   │   │   ├── login.tsx
│   │   │   ├── register.tsx
│   │   │   └── reset-password.tsx
│   ├── components/
│   ├── styles/
│   │   └── globals.css
├── public/
├── scripts/
│   └── deploy.sh
├── tests/
```

## 開発ガイドライン

1. TypeScriptで型安全性を確保する
2. 再利用可能なコンポーネントを設計する
3. アクセシビリティに焦点を当てる
4. パフォーマンスを最適化する
5. セキュリティを優先する

## 機能の優先順位

1. ユーザー認証
2. 道場プロフィール管理
3. 予約システム
4. トレーニング記録
5. イベント管理
6. ランキングシステム

## テスト要件

ユニットテスト、統合テスト、E2Eテストを実装する

## デプロイメント

Vercelを使用した継続的デプロイメント

## ドキュメンテーション

新機能で更新し、JSDocコメントを使用する

## コード品質

ESLint/Prettierを使用し、PRレビューは必須

## 言語

このプロジェクトの主要言語は日本語です。OpenDevinは日本語で応答してください。
