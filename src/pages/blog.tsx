import BlogPost from '../components/Blogpost';
import { Grid, Text } from '@geist-ui/react';
import { InferGetStaticPropsType } from 'next';
import { allBlogs } from '.contentlayer/data';
import Transition from '../components/Transition';

export default function Blog({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Grid.Container justify="center">
				<Transition delay={0.4}>
					<Text h1>Blog</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8} key={Math.random().toString()}>
					<Text p>So far, I have written {posts.length} blog posts.</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8} key={Math.random().toString()}>
					<Text h3>All posts</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8} key={Math.random().toString()}>
					{posts.map((post: any, index: number) => (
						<>
							<BlogPost key={post.title} {...post} />
							{index !== posts.length ? <br /> : null}
						</>
					))}
				</Transition>
			</Grid.Container>
		</>
	);
}

export function getStaticProps() {
	const posts = allBlogs.map((post: any) =>
		pick(post, ['slug', 'title', 'publishedAt'])
	);

	return { props: { posts } };
}

type ConvertUndefined<T> = OrUndefined<{
	[K in keyof T as undefined extends T[K] ? K : never]-?: T[K];
}>;
type OrUndefined<T> = { [K in keyof T]: T[K] | undefined };
type PickRequired<T> = {
	[K in keyof T as undefined extends T[K] ? never : K]: T[K];
};
type ConvertPick<T> = ConvertUndefined<T> & PickRequired<T>;

export const pick = <Obj, Keys extends keyof Obj>(
	obj: Obj,
	keys: Keys[]
): ConvertPick<{ [K in Keys]: Obj[K] }> => {
	return keys.reduce((acc, key) => {
		acc[key] = obj[key];
		return acc;
	}, {} as any);
};
