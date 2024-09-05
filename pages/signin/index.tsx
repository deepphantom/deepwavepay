import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { loadTranslations } from "@/lib/loadTranslations";

import { onboardtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/Icon";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { FormLayout } from "@/layouts/onboard/form";
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";

export default function SignInPage() {
  // Hooks
  const router = useRouter();

  // State
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Function to update dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Call the function on initial render
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener("resize", updateDimensions);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const t = useTranslations("common");

  return (
    <FormLayout
      bottom={t("words.create-account")}
      title="Sign In"
      subtitle="Welcome back! Continue"
    >
      <div
        className={`flex w-full flex-col ${dimensions.height < 700 ? "gap-5" : "gap-8"}`}
      >
        {/* Heading */}
        <div className="text-center sm:text-center">
          <h1 className={`${onboardtitle({ size: "sm" })} text-black`}>
            {t("sigin-page-title")}
          </h1>
          <p className="text-black">{t("sigin-page-subtitle")}</p>
        </div>

        {/* Button */}
        <div className="flex flex-col gap-3">
          <div className="w-full cursor-pointer flex items-center justify-center gap-2 h-[42px] bg-onboardWhite rounded-lg">
            <IoLogoGoogle size={20} color="black" />
            <p className="font-bold text-[14px] text-black">
              Log in with Google{" "}
            </p>
          </div>
          <div className="w-full cursor-pointer flex items-center justify-center gap-2 h-[42px] bg-onboardWhite rounded-lg">
            <FaGithub size={20} color="black" />
            <p className="font-bold text-[14px] text-black">
              Log in with GitHub{" "}
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <Divider className="basis-[43%] bg-[grey]" />
          <p className=" font-bold text-black">OR</p>
          <Divider className="basis-[43%] bg-[grey]" />
        </div>

        {/* Input Forgot Password */}
        <div className="flex flex-col gap-3">
          <Input
            radius="sm"
            type="email"
            placeholder={t("words.email")}
            style={{ color: "black" }}
            classNames={{
              input: [],
              innerWrapper: [],
              inputWrapper: [
                "h-[45px]",
                "bg-onboardWhite", // BG - color
                "group-data-[focus=true]:bg-onboardWhite", // Focus on !Focus (Blur)
                "group-data-[hover=true]:bg-onboardWhite", // Hover
                "dark:group-data-[focus=true]:text-black", // Text Color
              ],
            }}
          />

          <div>
            <Input
              radius="sm"
              style={{ color: "black" }}
              classNames={{
                input: [],
                innerWrapper: [],
                inputWrapper: [
                  "h-[45px]",
                  "bg-onboardWhite", // BG - color
                  "group-data-[focus=true]:bg-onboardWhite", // Focus on !Focus (Blur)
                  "group-data-[hover=true]:bg-onboardWhite", // Hover
                  "dark:group-data-[focus=true]:text-black", // Text Color
                ],
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              placeholder={t("words.password")}
            />
            <div className="text-right">
              <Link
                href={`${siteConfig.pagesPaths.help}`}
                className="underline text-[13px] font-bold text-black"
              >
                {t("words.forgot-password")}
              </Link>
            </div>
          </div>
        </div>

        {/* Button */}
        <div>
          <Button
            radius="sm"
            className="h-[45px] bg-primary text-white font-medium"
            fullWidth
          >
            {t("words.signin")}
          </Button>
        </div>
      </div>
    </FormLayout>
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
