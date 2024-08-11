import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import LoginAndRegistrationLayout from "@/layouts/onboarding";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <LoginAndRegistrationLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className=" flex flex-col gap-3 max-w-lg text-center justify-center">
          <h1 className={title()}>Onboarding</h1>
           <div>
            <Link href={`/${siteConfig.pagesPaths.signin}`} prefetch={true} className={subtitle()}>Sign In</Link>
          </div>
        </div>
      </section>
    </LoginAndRegistrationLayout>
  );
}
