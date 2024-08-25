import { Head } from "./head";
import { DashboardNavbar } from "@/components/Navbar/DashboardNavBar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head siteTitle={siteConfig.name} />
      <main className="">{children}</main>
    </div>
  );
}
