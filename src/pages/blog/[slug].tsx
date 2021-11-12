import { useMDXComponent } from 'next-contentlayer/hooks';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';
import Transition from '../../components/Transition';
import { Grid, Text } from '@geist-ui/react';
import { parseISO, format } from 'date-fns';

export default function Post({ post }: { post: Blog }) {
	const Component = useMDXComponent(post.body.code);

	return (
		<>
			<Grid.Container justify="center">
				<Transition delay={0.4}>
					<Text h1>{post.title}</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Text p>
						{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
						{' • '}
						{post.readingTime.text}
					</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Component />
				</Transition>
			</Grid.Container>
		</>
	);
}

export async function getStaticPaths() {
	return {
		paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = allBlogs.find((post) => post.slug === params.slug);

	return { props: { post } };
}
