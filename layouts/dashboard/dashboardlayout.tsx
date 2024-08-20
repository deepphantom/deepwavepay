import { Head } from "../head";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col">
      <Head siteTitle="Dashboard" />
      <main className="">
        {children}
      </main>
    </div>
  );
}
