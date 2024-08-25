import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ThemeSwitch } from "@/components/theme-switch";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <p className={title()}>Welcome to the Landing Page</p>
        <ThemeSwitch />
      </section>
    </DefaultLayout>
  );
}
