import { Head } from "./head";
import { NavBar } from "@/components/nav/NavBar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head sitetitle={siteConfig.name} />
      {/* <Navbar /> */}
      <NavBar />
      <main className="">
        {children}
      </main>
    </div>
  );
}
