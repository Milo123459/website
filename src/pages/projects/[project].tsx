import { projects } from '../../static/projects';
import { useRouter } from 'next/router';
import Transition from '../../components/Transition';
import { Grid, Text, Loading, Card, Link, Spacer } from '@geist-ui/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { GithubRepo } from '../../types/GithubRepo';
import NextLink from 'next/link';

const queryClient = new QueryClient();

// We are relying on the middleware to verify that it is a valid project.

function lower(a: string | string[]): string | undefined {
	if (Array.isArray(a) && a.length) {
		return a[0].toLowerCase();
	} else if (typeof a === 'string') {
		return (a as string).toLowerCase();
	}
}

export default function DynamicProject() {
	const router = useRouter();

	return (
		<>
			<Grid.Container justify="center">
				<Transition delay={0.4}>
					<Text h1>
						{projects.find(
							(r) => r.name.toLowerCase() === lower(router.query.project)
						)?.name || 'Project Name'}
					</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Text p>
						{projects.find(
							(r) => r.name.toLowerCase() === lower(router.query.project)
						)?.description || 'Description'}
					</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<QueryClientProvider client={queryClient}>
						<RepoInformation
							repo={
								projects.find(
									(r) => r.name.toLowerCase() === lower(router.query.project)
								)?.repo || 'Description'
							}
						/>
					</QueryClientProvider>
				</Transition>
			</Grid.Container>
		</>
	);
}

function RepoInformation(props: Props) {
	const {
		isLoading,
		error,
		data: raw_data,
		isFetching,
	} = useQuery('repoData', () =>
		fetch(`https://api.github.com/repos/${props.repo}`).then((res) =>
			res.json()
		)
	);

	const data = raw_data as GithubRepo;

	if (isLoading) return <Loading />;
	if (error)
		return (
			<Text p color="red">
				There was an error.
			</Text>
		);

	return (
		<>
			<Grid.Container justify="center">
				<Card>
					<Text h4>Information</Text>
					<Text p>
						⭐ {data.stargazers_count}
						<br />
						👀 {data.subscribers_count}
						<br />
						🍴 {data.forks_count}
					</Text>
				</Card>
				<Card>
					<Text h4>Links</Text>
					<Text p>
						<NextLink href={`https://github.com/${props.repo}`} passHref>
							<Link color icon>
								Repository
							</Link>
						</NextLink>
						{data.homepage ? (
							<>
								<br />
								<NextLink href={data.homepage} passHref>
									<Link color icon>
										Homepage
									</Link>
								</NextLink>
							</>
						) : null}
					</Text>
				</Card>
				{isFetching ? (
					<>
						<Text i>Updating..</Text>
					</>
				) : null}
			</Grid.Container>
		</>
	);
}

interface Props {
	repo: string;
}
