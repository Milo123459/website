import { NextRequest } from 'next/server';

export default async function handler(req: NextRequest) {
	console.log(req.ua.isBot);
}
