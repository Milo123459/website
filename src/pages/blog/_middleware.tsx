import { NextRequest, NextResponse } from 'next/server';
import { allBlogs } from '.contentlayer/data';

export default function middleware(req: NextRequest) {
	if (!req.page.params?.slug) {
		return NextResponse.rewrite('/blog');
	}
	if (
		!allBlogs.find(
			(r) => r.slug.toLowerCase() === req.page.params.slug.toLowerCase()
		)
	) {
		return NextResponse.rewrite('/blog');
	} else {
		return NextResponse.next();
	}
}
