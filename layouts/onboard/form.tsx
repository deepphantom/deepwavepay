import { onboardtitle, onboardSubtitle } from "@/components/primitives";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import LoginAndRegistrationLayout from "../onboarding";
import { ReactNode, useEffect, useState } from "react";
import { AppLogo } from "@/components/Icon";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { siteImagesPath } from "@/config/images";
import { useRouter } from "next/router";
import LanguageSwitcher from "@/utilities/LangSwitcher";

export const FormLayout = ({
  title,
  subtitle,
  bottom,
  children,
}: {
  title: string;
  subtitle: string;
  bottom: string;
  children: ReactNode;
}) => {
  const [routePath, setRoutPath] = useState("");

  const route = useRouter();
  useEffect(() => {
    setRoutPath(route.pathname);
  }, []);

  return (
    <LoginAndRegistrationLayout>
      <section className="flex items-start">
        {/* Left */}
        <div className="basis-[100%] justify-between flex flex-col p-5 sm:p-10 md:basis-[50%] h-screen">
          {/* Heading */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image
                src={siteImagesPath.appLogo}
                style={{ objectFit: "cover" }}
                alt="sitelogo"
                className="w-[110px] sm:w-[130px]"
              />
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-7 sm:gap-0 items-center justify-center">
            <div className="w-[100%] sm:w-[350px] flex flex-col items-center">
              {children}
            </div>

            {/* Footer */}
            <div
              className={`${routePath == "/signin" ? "flex flex-col sm:hidden" : "hidden"}`}
            >
              <Link
                href={`/${siteConfig.pagesPaths.onboading}`}
                className="underline text-[13px] font-bold text-center text-black"
              >
                {bottom}
              </Link>
            </div>

            {/* SM */}

            <div
              className={`mt-5 ${routePath == "/signin" ? "hidden sm:flex flex-col " : "hidden"}`}
            >
              <Link
                href={`/${siteConfig.pagesPaths.onboading}`}
                className="underline text-[13px] font-bold text-center text-black"
              >
                {bottom}
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="flex sm:hidden"></div>
          <Link
            href={`/${siteConfig.pagesPaths.onboading}`}
            className={`hidden ${routePath == "signin" && "sm:flex"} justify-center underline text-[13px] font-bold text-center text-black`}
          >
            {bottom}
          </Link>
          <div className="hidden sm:flex"></div>
        </div>

        {/* Right */}
        <div className="basis-[0%] md:basis-[50%] h-screen">
          <Image
            src={require("../../public/assets/5.jpg")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="onboard-bg"
            quality={10}
          />
        </div>
      </section>
    </LoginAndRegistrationLayout>
  );
};
