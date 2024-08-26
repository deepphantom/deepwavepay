import { DashboardNavbar } from "@/components/Navbar/DashboardNavBar";
import { Head } from "../head";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useState, cloneElement, ReactElement } from "react";
import { useRouter } from "next/router";

export default function DashboardLayout({
  children,
}: {
  children: ReactElement;
}) {
  // Hooks
  const router = useRouter();

  const [sideNavLeft, setSideNavLeft] = useState(`-left-2/3`);

  function OpenSideNav() {
    setSideNavLeft(`left-0`);
  }

  function CloseSideNav() {
    setSideNavLeft(`-left-2/3`);
  }

  // Determine the title based on the pathname
  const getTitle = () => {
    const path = router.pathname.split("/").pop(); // Get the last part of the pathname
    const titleMap: { [key: string]: string } = {
      "": "Dashboard",
      accounts: "Accounts",
      transactions: "Transactions",
      inward: "Inward",
      transfer: "Cash Out",
      utilities: "Bills & Utilities",
      webhook: "Webhooks",
      settings: "Settings",
      help: "Help",
    };
    return titleMap[path || ""] || "Dashboard"; // Default to "Dashboard" if path is not mapped
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <Head siteTitle="Dashboard" />
      <div className="flex flex-1 relative">
        <div
          className={`h-screen w-[70%] transition-all duration-500 ease-in-out md:w-max absolute md:relative z-50 bg-background ${sideNavLeft} md:left-0 overflow-scroll scrollbar-hide`}
        >
          <Sidebar CloseSideNav={CloseSideNav} />
        </div>
        <div className="px-5 h-screen overflow-scroll scrollbar-hide lg:px-10 flex-1 bg-dashboardBg">
          <DashboardNavbar action={OpenSideNav} title={getTitle()} />
          <main role="presentation" className=" flex-1" onClick={CloseSideNav}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
