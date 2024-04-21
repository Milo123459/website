export default function Description({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="text-sm">{children}</p>;
}
