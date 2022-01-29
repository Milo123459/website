export default function Paragraph(props: { children: React.ReactNode }) {
	return (
		<p className="max-w mx-auto max-w-lg text-base dark:text-neutral-300 sm:max-w-sm md:max-w-md">
			{props.children}
		</p>
	);
}
