import { onboardtitle, onboardSubtitle } from "@/components/primitives"
import { Card } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"
import LoginAndRegistrationLayout from "../onboarding"
import { ReactNode } from "react"
import { AppLogo } from "@/components/Icon"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export const FormLayout = ({title, subtitle, children} : {title: string, subtitle: string, children:ReactNode } )=> {
    
    return (
        <LoginAndRegistrationLayout>
            <section className="flex h-[100%] items-start">

                {/* Left */}
                <div className="basis-[100%] flex flex-col p-10 md:basis-[50%] h-[100%]">

                    {/* Heading */}
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <AppLogo />
                        {/* Link */}
                        <Link prefetch={true} className="text-[13px] font-bold text-md underline" href={`/${siteConfig.pagesPaths.onboading}`}>Create an account</Link>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-[350px] flex flex-col items-center">
                            {children}
                        </div>
                    </div>

                    {/* Footer */}
                    <Link href={`${siteConfig.pagesPaths.help}`} className="underline text-[13px] font-bold text-center">Trouble signing in?</Link>
 
                </div>

                {/* Right */}
                <div className="basis-[0%] md:basis-[50%] bg-blue-950 h-[100%]">

                </div>

            </section>
        </LoginAndRegistrationLayout>
    )

}