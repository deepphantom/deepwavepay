import { siteConfig } from "@/config/site"
import Link from "next/link"

export const NavBar = () => {
    return (
        <div>
            <p>Nav Bar Here</p>
            <div>
                <Link href={`/${siteConfig.pagesPaths.signin}`} prefetch={true}>Sign In</Link>
            </div>
            <div>
                <Link href={`/${siteConfig.pagesPaths.onboading}`} prefetch={true}>Get Started</Link>
            </div>
        </div>
    )
}