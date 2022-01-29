import NextLink from 'next/link';

export default function Link(props: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<NextLink href={props.href}>
			<span className="text-blue-300 hover:animate-pulse hover:cursor-pointer">
				{props.children}
			</span>
		</NextLink>
	);
}
