import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
	console.log(`${req.method} ${req.url}`);
	return NextResponse.next();
}
