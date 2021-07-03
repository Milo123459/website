import Title from '../components/Title';
import Information from '../components/Information';
import Link from '../components/Link';

export default function Home() {
	return (
		<div>
			<Title>Oh hey there, welcome.</Title>
			<Information>
				I'm{' '}
				<Link link="https://git.io/milo" colour="pink">
					Milo.
				</Link>
			</Information>
		</div>
	);
}
