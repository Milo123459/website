import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { StarIcon, RepoForkedIcon, EyeIcon } from '@primer/octicons-react';
import { RepoResponse } from '../typings/RepoResponse';
import Code from '../components/Code';
import CodeLink from '../components/CodeLink';

const client = new QueryClient();

interface Props {
	repo: string;
}

export default function GitHubRepo(props: Props) {
	return (
		<QueryClientProvider client={client}>
			<Query {...props} />
		</QueryClientProvider>
	);
}

function Query(props: Props) {
	const { isLoading, error, data } = useQuery(`repo${props.repo}`, async () => {
		const data = await (
			await fetch(`https://api.github.com/repos/${props.repo}`)
		).json();
		return data as RepoResponse;
	});
	if (isLoading) {
		return <Code>give me a minute im loading stuff</Code>;
	}
	if (error) {
		return <Code>i errored {(error as { message: string }).message} </Code>;
	}
	return (
		<>
			<CodeLink
				noPre={true}
				colour="pink"
				link={`https://github.com/${props.repo}`}
			>
				{props.repo}
			</CodeLink>
			<br />
			<br />
			<StarIcon size={20}></StarIcon>{' '}
			<Code noPre={true}>{data.stargazers_count.toLocaleString()}</Code>
			&nbsp;
            &nbsp;
			<RepoForkedIcon size={20}></RepoForkedIcon>{' '}
			<Code noPre={true}>{data.forks_count.toLocaleString()}</Code>
			&nbsp;
            &nbsp;
			<EyeIcon size={20}></EyeIcon>{' '}
			<Code noPre={true}>{data.watchers_count.toLocaleString()}</Code>
		</>
	);
}
