import { Text, Link } from '@geist-ui/react';
import NextLink from 'next/link';

interface Props {
	title: string;
	slug: string;
}

export default function BlogPost(props: Props) {
	const { slug, title } = props;
	return (
		<NextLink href={`/blog/${slug}`} passHref>
			<Link icon color>
				{title}
			</Link>
		</NextLink>
	);
}
