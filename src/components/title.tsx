export default function Title({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h1 className="font-bold text-3xl pb-8">{children}</h1>;
}
