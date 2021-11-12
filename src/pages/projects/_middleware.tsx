import { NextRequest, NextResponse } from 'next/server';
import { projects } from '../../static/projects';

export default function middleware(req: NextRequest) {
	if (!req.page.params?.project) {
		return NextResponse.rewrite('/projects');
	}
	if (
		!projects.find(
			(r) => r.name.toLowerCase() === req.page.params.project.toLowerCase()
		)
	) {
		return NextResponse.rewrite('/projects');
	} else {
		return NextResponse.next();
	}
}
