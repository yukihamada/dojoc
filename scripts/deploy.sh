#!/bin/bash

# デプロイ前にテストを実行
npm test

# テストが成功した場合、デプロイを実行
if [ $? -eq 0 ]; then
  echo "テストが成功しました。デプロイを開始します。"
  # Vercelにデプロイ
  vercel --prod
else
  echo "テストが失敗しました。デプロイを中止します。"
  exit 1
fi
