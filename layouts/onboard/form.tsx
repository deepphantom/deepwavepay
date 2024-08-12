import { onboardtitle, onboardSubtitle } from "@/components/primitives"
import { Card } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"
import LoginAndRegistrationLayout from "../onboarding"
import { ReactNode } from "react"

export const FormLayout = ({title, subtitle, body} : {title: string, subtitle: string, body:ReactNode } )=> {
    return (
        <LoginAndRegistrationLayout>
            <section className="flex w-full items-center justify-center">

                <div className="w-[93%] sm:w-[500px]">

                <Card className="py-10 sm:py-20 px-5 sm:px-8 w-full">

                    {/* Heading */}
                    <div className="mb-1 flex-col flex gap-1">
                    <p className={onboardtitle({size: 'sm'})}>{title}</p>
                    <p className={`${onboardSubtitle()} font-light`}>{subtitle}</p>
                    </div>
                    
                    {/* Divider */}
                    <Divider />
                    
                    {/* Body */}
                    {body}

                </Card>

                </div>

            </section>
        </LoginAndRegistrationLayout>
    )
}