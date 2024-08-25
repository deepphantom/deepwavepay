import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ThemeSwitch } from "@/components/theme-switch";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <p className={title()}>Welcome to the Landing Page</p>
        <Link href={`/${siteConfig.pagesPaths.onboading}`}>Create Account</Link>
        <Link href={`/${siteConfig.pagesPaths.signin}`}>Sign In</Link>
        <Link href={`/${siteConfig.pagesPaths.dashboard}`}>Dashboard</Link>
        <ThemeSwitch />
      </section>
    </DefaultLayout>
  );
}
