import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { loadTranslations } from "@/lib/loadTranslations";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ThemeSwitch } from "@/components/theme-switch";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import LanguageSwitcher from "@/utilities/LangSwitcher";

export default function IndexPage() {
  const t = useTranslations("common");

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <p className={title()}> {t("welcome")} </p>
        <Link href={`/${siteConfig.pagesPaths.onboading}`}>Create Account</Link>
        <Link href={`/${siteConfig.pagesPaths.signin}`}>Sign In</Link>
        <Link href={`${siteConfig.pagesPaths.dashboard}`}>Dashboard</Link>
        <ThemeSwitch />
        <LanguageSwitcher />
      </section>
    </DefaultLayout>
  );
}

// Fetch the translations based on the locale
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await loadTranslations(locale || "en-US");

  return {
    props: {
      messages,
    },
  };
}
