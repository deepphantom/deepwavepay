import { onboardtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import React from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/Icon";
import {Divider} from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { FormLayout } from "@/layouts/onboard/form";
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function SignInPage() {

  // State
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    
    <FormLayout 
      title="Sign In"
      subtitle="Welcome back! Continue"
    >
      <div className="flex w-full flex-col gap-10 sm:gap-10">

        {/* Heading */}
        <div className="text-left sm:text-center">
          <h1 className={`${onboardtitle({size: 'md'})} text-black`}>Welcome back</h1>
          <p className="text-black">Kindly enter your Login details</p>
        </div>

        {/* Button */}
        <div className="flex flex-col gap-3">
            <div className="w-full cursor-pointer flex items-center justify-center gap-2 h-[42px] bg-[#F2F2F4] rounded-lg">
              <IoLogoGoogle size={20} color="black" />
              <p className="font-bold text-[14px] text-black">Log in with Google </p>
            </div>
            <div className="w-full cursor-pointer flex items-center justify-center gap-2 h-[42px] bg-[#F2F2F4] rounded-lg">
              <FaGithub size={20} color='black' />
              <p className="font-bold text-[14px] text-black">Log in with GitHub </p>
            </div>
        </div>

        <Divider className="text-black bg-[grey]" />

        {/* Input Forgot Password */}
        <div className="flex flex-col gap-3">

          <Input
            radius='sm'
            type='email'
            placeholder="Email"
          />

          <div>
            <Input
              classNames={{mainWrapper: 'remove-input-bg'}}
              radius='sm'
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              placeholder="Password"
            />
            <div className="text-right">
              <Link href={`${siteConfig.pagesPaths.help}`} className="underline text-[13px] font-bold text-black" >Forgot password</Link>
            </div>
          </div>

        </div>

        {/* Button */}
        <div>
          <Button className="h-[54px] bg-primary text-white font-medium" fullWidth>Sign In</Button>  
        </div>

      </div>
    </FormLayout>

  );
}
