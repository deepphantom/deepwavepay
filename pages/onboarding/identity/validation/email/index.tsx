import React, { useEffect, useState } from "react";
import { onboardtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { FormLayout } from "@/layouts/onboard/form";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import { useAccountType } from "@/context/OnboadingContext";
import { useRouter } from "next/router";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/Icon";
import Select from "react-select";
import { countryOptions } from "@/public/files/data/countries";

const EmailValidation = () => {
  // Hooks
  const { accountType } = useAccountType();
  const router = useRouter();

  // Ref
  const myRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (!accountType) {
      router.push(`/${siteConfig.pagesPaths.onboading}`); // Redirect to create account page
    } else {
      setIsLoading(false);
    }
  }, [accountType, router]);

  // State
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState<any>(null);

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

  if (isLoading) {
    return <div></div>;
  }

  return (
    <FormLayout
      bottom="Identity2"
      title="Let's get started"
      subtitle="I want to open an"
    >
      <div
        className={`flex w-full flex-col ${dimensions.height < 700 ? "gap-5" : "gap-8"}`}
      >
        {/* Heading */}
        <div className="text-center sm:text-center">
          <h1 className={`${onboardtitle({ size: "sm" })} text-black`}>
            Email Validation
          </h1>
          <p className="text-black">We&apos;d like to validate your email</p>
        </div>

        {/* Form Comp */}
        <div className="flex flex-col gap-5">
          {/* Single Inputs  */}
          <div className="flex flex-col gap-1">
            <p className="text-[15px] opacity-90 text-black"> Email OTP</p>
            <div className="flex flex-col gap-3">
              <Input
                radius="sm"
                type="tel"
                maxLength={6}
                placeholder="123456"
                style={{ color: "black", WebkitAppearance: "none" }}
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
              <p className="text-[12px] text-black px-2 font-normal opacity-60">
                Please check your inbox or spam folder to retrieve your OTP. Do
                not share this with anyone.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {/* Button */}
          <Link href={`/${siteConfig.pagesPaths.dashboard}`}>
            <Button
              radius="sm"
              className="h-[45px] bg-primary text-white font-medium"
              fullWidth
            >
              Verify OTP
            </Button>
          </Link>
        </div>

        <div></div>
      </div>
    </FormLayout>
  );
};

export default EmailValidation;
