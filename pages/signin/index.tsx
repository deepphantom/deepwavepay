import { onboardSubtitle, onboardtitle, subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import {Card } from '@nextui-org/card';
import LoginAndRegistrationLayout from "@/layouts/onboarding";
import Link from "next/link";
import { Input } from "@nextui-org/input";
import React from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/Icon";
import {Divider} from "@nextui-org/divider";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TbInfoCircle } from "react-icons/tb";
import { Button } from "@nextui-org/button";


export default function SignInPage() {

  // State
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);


  return (
    <LoginAndRegistrationLayout>
      <section className="flex w-full items-center justify-center">

        <div className="w-[93%] sm:w-[500px]">

          <Card className="py-14 px-5 sm:px-8 w-full">

            {/* Heading */}
            <div className="mb-3 flex-col flex gap-1">
              <p className={onboardtitle({size: 'sm'})}>Sign In</p>
              <p className={`${onboardSubtitle()} font-light`}>Welcome back! Login and proceed</p>
            </div>

            <Divider />

            {/* Input Fields */}
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex flex-col gap-2">
                <p className="text-sm opacity-75 font-normal">Email Address</p>
                <Input type="email" size='lg' className=" rounded-none" radius='sm' isRequired placeholder="example@xyz.com" />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm opacity-75 font-normal">Password</p>
                <Input 
                  size='lg'
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
                  className="rounded-none" 
                  radius='sm' 
                  isRequired 
                  placeholder="⋆⋆⋆⋆⋆⋆⋆" 
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="mt-3 flex items-center justify-end">
              <div className=" flex items-center gap-1 cursor-pointer">
                <AiOutlineInfoCircle size={25} className="opacity-60" />
                <p className={`${onboardSubtitle()} font-light`}>forgot password</p>
              </div>
            </div>

            {/* Button */}
            <div className="w-full mt-8">
              <Button color='primary' className="w-full text-white h-14" radius='sm' size='lg'>Continue</Button>
              <div className="mt-3 flex justify-end gap-2">
                <p className={` text-sm opacity-65 font-light`}>Don’t have an account?</p>
                <p className={`text-primary font-medium text-sm cursor-pointer`}>Create Account</p>
              </div>
            </div>

          </Card>

        </div>

      </section>
    </LoginAndRegistrationLayout>
  );
}
