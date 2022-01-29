export default function Header(props: { children: React.ReactNode }) {
	return <h1 className="text-[48px]">{props.children}</h1>;
}
