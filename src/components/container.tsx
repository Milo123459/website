export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mb-32 flex justify-center flex-wrap gap-2 pb-2">
      {children}
    </div>
  );
}
