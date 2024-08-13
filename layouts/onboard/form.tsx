import { onboardtitle, onboardSubtitle } from "@/components/primitives"
import { Card } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"
import LoginAndRegistrationLayout from "../onboarding"
import { ReactNode } from "react"
import { AppLogo } from "@/components/Icon"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import Image from "next/image"
import { siteImagesPath } from "@/config/images"

export const FormLayout = ({title, subtitle, children} : {title: string, subtitle: string, children:ReactNode } )=> {
    
    return (
        <LoginAndRegistrationLayout>
            <section className="flex h-[100%] items-start">

                {/* Left */}
                <div className="basis-[100%] justify-between flex flex-col p-7 sm:p-10 md:basis-[50%] h-[100%]">

                    {/* Heading */}
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/">
                            <Image 
                                src={siteImagesPath.appLogo}
                                style={{width: 130, objectFit: 'cover' }}
                                alt="sitelogo"
                            />
                        </Link>
                        {/* Link */}
                        <Link className="text-[13px] font-bold text-md text-black underline" href={`${siteConfig.pagesPaths.onboading}`}>Create an account</Link>
                    </div>

                    {/* Body */}
                    <div className="flex items-center justify-center">
                        <div className="w-[95%] sm:w-[350px] flex flex-col items-center">
                            {children}
                        </div>
                    </div>

                    {/* Footer */}
                    <Link href={'/'} className="underline text-[13px] font-bold text-center text-black">Trouble signing in?</Link>
                </div>

                {/* Right */}
                <div className="basis-[0%] md:basis-[50%] h-[100%]">
                    <Image 
                        src={require("../../public/assets/4.jpg")}
                        style={{width: '100%', height: "100%", objectFit: 'cover' }}
                        alt="onboard-bg"
                        quality={40}
                    />
                </div>

            </section>
        </LoginAndRegistrationLayout>
    )

}