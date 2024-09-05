import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { loadTranslations } from "@/lib/loadTranslations";
import { onboardtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { FormLayout } from "@/layouts/onboard/form";
import { Card, CardBody } from "@nextui-org/card";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardBackspace, MdKeyboardArrowRight } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiBagFill } from "react-icons/pi";
import { useAccountType } from "@/context/OnboadingContext";
import { useRouter } from "next/router";

export default function OnboardingPage() {
  // Hook
  const { setAccountType } = useAccountType();
  const router = useRouter();

  const t = useTranslations("common");

  // State
  const [isVisible, setIsVisible] = React.useState(false);
  const [individualCheckboxState, setIndividualCheckboxState] = useState(false);
  const [cooperateCheckboxState, setCooperateCheckboxState] = useState(false);

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

  const Navigate = (type: any) => {
    setAccountType(type);
    router.push(`/${siteConfig.pagesPaths.identity}`);
  };

  return (
    <FormLayout
      bottom="Sign In"
      title="Let's get started"
      subtitle="I want to open an"
    >
      <div
        className={`flex w-full flex-col ${dimensions.height < 700 ? "gap-5" : "gap-8"}`}
      >
        {/* Heading */}
        <div className="text-center sm:text-center">
          <h1 className={`${onboardtitle({ size: "sm" })} text-black`}>
            {t("onboard.reg-page-title")}
          </h1>
          <p className="text-black">{t("onboard.reg-page-subtitle")}</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          <Card
            shadow="none"
            radius="sm"
            fullWidth
            className="bg-onboardWhite cursor-pointer"
          >
            <CardBody className="p-5 h-28">
              <div
                role="presentation"
                onClick={() => {
                  setIndividualCheckboxState(true),
                    Navigate("individual"),
                    setCooperateCheckboxState(false);
                }}
                className="flex items-center h-full justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    radius="full"
                    isSelected={individualCheckboxState}
                    size="lg"
                    defaultSelected
                  />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <IoMdPerson size={18} color="black" />
                      <p className="text-black text-md font-medium">
                        {t("onboard.individual-account")}
                      </p>
                    </div>
                    <p className="text-onboardFaintText font-normal text-[14px]">
                      {t("onboard.individual-description")}
                    </p>
                  </div>
                </div>
                <MdKeyboardArrowRight color="#555" size={20} />
              </div>
            </CardBody>
          </Card>

          <Card
            radius="sm"
            shadow="none"
            fullWidth
            className="bg-onboardWhite cursor-pointer"
          >
            <CardBody className="p-5 h-28">
              <div
                role="presentation"
                onClick={() => {
                  setCooperateCheckboxState(true),
                    setIndividualCheckboxState(false);
                }}
                className="flex items-center h-full justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    radius="full"
                    isSelected={cooperateCheckboxState}
                    size="lg"
                    defaultSelected
                  />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <PiBagFill size={18} color="black" />
                      <p className="text-black text-md font-medium">
                        {t("onboard.corperate-account")}
                      </p>
                    </div>
                    <p className="text-onboardFaintText font-normal text-[14px]">
                      {t("onboard.corperate-description")}
                    </p>
                  </div>
                </div>
                <MdKeyboardArrowRight color="#555" size={20} />
              </div>
            </CardBody>
          </Card>

          <Link href={`/${siteConfig.pagesPaths.signin}`}>
            <div className="flex items-center gap-1 justify-end">
              <MdKeyboardBackspace color="#555" size={20} />
              <p className="text-[#555] text-[14px] font-normal">
                {t("words.back")}
              </p>
            </div>
          </Link>
        </div>

        <div></div>
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
