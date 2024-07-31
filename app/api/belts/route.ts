import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // GETリクエストの処理
  return NextResponse.json({ message: 'Hello from the belts API!' });
}

export async function POST(request: Request) {
  // POSTリクエストの処理
  const body = await request.json();
  return NextResponse.json({ message: 'Received POST request', data: body });
}

// 他のHTTPメソッドも同様に定義できます
