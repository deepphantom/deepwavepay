import { siteConfig } from "@/config/site"
import Link from "next/link"

export const NavBar = () => {
    return (
        <div>
            <p>Nav Bar Here</p>
            <div>
                <Link href={`/${siteConfig.pagesPaths.signin}`}>Sign In</Link>
            </div>
            <div>
                <Link href={`/${siteConfig.pagesPaths.onboading}`}>Get Started</Link>
            </div>
        </div>
    )
}