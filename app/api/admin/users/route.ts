import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  return new Response(JSON.stringify({ message: 'Admin Users API route' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
