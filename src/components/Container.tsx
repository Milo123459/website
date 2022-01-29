export default function Container(props: {
	children: React.ReactNode;
	horizontal?: boolean;
}) {
	return (
		<div
			className={`container self-center py-2 px-2 pt-2 text-center ${
				props.horizontal ? 'space-x-1' : ''
			}`}
		>
			{props.children}
		</div>
	);
}
