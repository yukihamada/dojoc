import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  return new Response(JSON.stringify({ message: 'Admin Dojos API route' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const runtime = 'nodejs';
export const preferredRegion = 'auto';
