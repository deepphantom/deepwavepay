import { DashboardNavbar } from "@/components/Navbar/DashboardNavBar";
import { Head } from "../head";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head siteTitle="Dashboard" />
      <div className="flex flex-1">
        <div className="h-screen overflow-scroll scrollbar-hide">
          <Sidebar />
        </div>
        <div className="px-5 h-screen overflow-scroll scrollbar-hide lg:px-10 flex-1 bg-dashboardBg">
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
