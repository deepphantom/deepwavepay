import React, { useEffect, useState } from "react";
import { onboardtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { FormLayout } from "@/layouts/onboard/form";
import { Card, CardBody } from "@nextui-org/card";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import { MdKeyboardBackspace, MdKeyboardArrowRight } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiBagFill } from "react-icons/pi";
import { useAccountType } from "@/context/OnboadingContext";
import { useRouter } from "next/router";

const IdentityOnboard = () => {

    // Hooks
    const { accountType } = useAccountType();
    const router = useRouter();

    useEffect(() => {
        if (!accountType) {
            router.push(`/${siteConfig.pagesPaths.onboading}`); // Redirect to create account page
        }else {
            setIsLoading(false);
        }
    }, [accountType, router]);

    
    // State
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [individualCheckboxState, setIndividualCheckboxState] = useState(false);
    const [cooperateCheckboxState, setCooperateCheckboxState] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const [dimensions, setDimensions] = useState({ 
        width: 0, 
        height: 0 
    });

    useEffect(() => {
        // Function to update dimensions
        const updateDimensions = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
        };

        // Call the function on initial render
        updateDimensions();

        // Update dimensions on window resize
        window.addEventListener('resize', updateDimensions);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    if(isLoading){
        return <div></div>;
    }

    return (
        <FormLayout 
        title="Let's get started"
        subtitle="I want to open an"
        >
        <div className={`flex w-full flex-col ${dimensions.height < 700 ? 'gap-5' : 'gap-8' }`}>

            {/* Heading */}
            <div className="text-center sm:text-center">
            <h1 className={`${onboardtitle({size: 'sm'})} text-black`}>Let’s get started</h1>
            <p className="text-black">Select your type of ss</p>
            </div>


            {/* Cards */}
            <div className="flex flex-col gap-4">
            
            <Card shadow="none" radius='sm' fullWidth className="bg-onboardWhite cursor-pointer">
                <Link
                href={{
                    pathname: '/onboarding/identity',
                    query: {name: "Olumide"} // the data
                }}
                >
                <CardBody className="p-5 h-28">
                    <div role="presentation" onClick={()=> {setIndividualCheckboxState(true), setCooperateCheckboxState(false)}} className="flex items-center h-full justify-between">
                        <div className="flex items-center gap-2">
                        <Checkbox
                            radius="full" 
                            isSelected={individualCheckboxState} 
                            size='lg'
                            defaultSelected
                        />
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                            <IoMdPerson size={18} color="black" />
                            <p className="text-black text-md font-medium">Individual Account</p>
                            </div>
                            <p className="text-onboardFaintText font-normal text-[14px]">I want to open an Individual Account</p>
                        </div>
                        </div>
                        <MdKeyboardArrowRight color="#555" size={20} />
                    </div>
                </CardBody>
                </Link>
            </Card>
            
            <Card radius='sm' shadow="none" fullWidth className="bg-onboardWhite cursor-pointer">
                <CardBody className="p-5 h-28">
                <div role="presentation" onClick={()=> {setCooperateCheckboxState(true), setIndividualCheckboxState(false)}} className="flex items-center h-full justify-between">
                    <div className="flex items-center gap-2">
                    <Checkbox 
                        radius="full" 
                        isSelected={cooperateCheckboxState} 
                        size='lg'
                        defaultSelected
                    />
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                        <PiBagFill size={18} color="black" />
                        <p className="text-black text-md font-medium">Corperate Account</p>
                        </div>
                        <p className="text-onboardFaintText font-normal text-[14px]">I want to open a Corperate Account</p>
                    </div>
                    </div>
                    <MdKeyboardArrowRight color="#555" size={20} />
                </div>
                </CardBody>
            </Card>

            <Link href={`/${siteConfig.pagesPaths.signin}`}>
                <div className="flex items-center gap-1 justify-end">
                <MdKeyboardBackspace color="#555" size={20} />
                <p className="text-[#555] text-[14px] font-normal">Back</p>
                </div>
            </Link>

            </div>

            <div></div>


        </div>
        </FormLayout>
    );

}

export default IdentityOnboard;