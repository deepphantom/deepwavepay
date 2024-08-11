import { AppLogo } from "@/components/Icon";
import { Head } from "./head";
import Link from "next/link";
import {Progress} from "@nextui-org/progress";
import { ThemeSwitch } from "@/components/theme-switch";

export default function LoginAndRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head sitetitle="Welcome" />
      <div className=" flex items-center justify-between max-w-[100%] px-5 sm:px-0 py-5 sm:max-w-[88%] self-center w-full">
        <Link href={"/"} prefetch={true}>
          <AppLogo size={50} />
        </Link>
        <ThemeSwitch />
      </div>
      <main className="mt-14">
        {children}
      </main>
    </div>
  );
}
