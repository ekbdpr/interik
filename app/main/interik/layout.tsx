import Header from '@/app/ui/interik/header';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      <Header />
      {/* end header */}

      {/* content */}
      <div className="flex flex-row justify-around">{children}</div>
      {/* end content */}
    </div>
  );
}
