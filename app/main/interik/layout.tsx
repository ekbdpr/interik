import Header from '@/app/ui/interik/header';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col gap-2">
      {/* header */}
      <Header />
      {/* end header */}

      {/* content */}
      <div className="flex flex-row mx-4 md:mx-auto justify-around">
        {children}
      </div>
      {/* end content */}
    </div>
  );
}
