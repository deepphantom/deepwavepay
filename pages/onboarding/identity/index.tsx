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

const IdentityOnboard = () => {
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
      bottom="Identity"
      title="Let's get started"
      subtitle="I want to open an"
    >
      <div
        className={`flex w-full flex-col ${dimensions.height < 700 ? "gap-5" : "gap-8"}`}
      >
        {/* Heading */}
        <div className="text-center sm:text-center">
          <h1 className={`${onboardtitle({ size: "sm" })} text-black`}>
            Confirm your details
          </h1>
          <p className="text-black">Kindly enter your details correctly</p>
        </div>

        {/* Form Comp */}
        <div className="flex flex-col gap-5">
          {/* Double Inputs  */}
          <div className="flex flex-col gap-1">
            <p className="text-[15px] text-black opacity-90">Full name</p>
            <div className="flex items-center gap-3">
              <Input
                required
                radius="sm"
                type="text"
                placeholder="John"
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
              <Input
                radius="sm"
                type="text"
                placeholder="Doe"
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
            </div>
            <p className="text-[12px] text-black px-2 font-normal opacity-60">
              Please ensure this is first and last name on your Government ID
              document.
            </p>
          </div>

          {/* Single Inputs  */}
          <div className="flex flex-col gap-1">
            <p className="text-[15px] opacity-90 text-black">Email address</p>
            <div className="flex flex-col gap-3">
              <Input
                radius="sm"
                type="email"
                placeholder="example@xyz.com"
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
            </div>
          </div>

          {/* Country Selection */}
          <div className="flex flex-col gap-1">
            <p className="text-[15px] opacity-90 text-black">
              Select your country
            </p>
            <Select
              className="basic-single"
              classNamePrefix="select"
              placeholder="Select your country"
              value={country}
              onChange={setCountry}
              options={countryOptions}
              styles={{
                control: (provided) => ({
                  ...provided,
                  height: "45px",
                  backgroundColor: "#F2F2F4",
                  // borderColor: 'var(--gray-300)',
                  color: "black",
                }),
                option: (provided) => ({
                  ...provided,
                  color: "black",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "black",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "black",
                  // opacity: 0.5
                }),
              }}
            />
          </div>

          {/* Single Inputs  */}
          <div className="flex flex-col gap-1">
            <p className="text-[15px] opacity-90 text-black">
              Enter a password
            </p>
            <div className="flex flex-col gap-3">
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
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-5">
          <Checkbox>
            <p className="text-[14px] font-normal opacity-80 text-black">
              I Agree with the{" "}
              <Link
                className="font-medium text-primary"
                href={`/${siteConfig.pagesPaths.help}`}
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                className="font-medium text-primary"
                href={`/${siteConfig.pagesPaths.conditions}`}
              >
                Conditions
              </Link>
              .
            </p>
          </Checkbox>

          {/* Button */}
          <Button
            onClick={() =>
              router.push(`/${siteConfig.pagesPaths.emailValidation}`)
            }
            role="presentation"
            radius="sm"
            className="h-[45px] bg-primary text-white font-medium"
            fullWidth
          >
            Create Account
          </Button>
        </div>

        <div></div>
      </div>
    </FormLayout>
  );
};

export default IdentityOnboard;
