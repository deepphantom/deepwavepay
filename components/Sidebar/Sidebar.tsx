import { useState } from "react";
import { useRouter } from "next/router";
import {
  RiDashboardHorizontalFill,
  RiFileHistoryLine,
  RiMenu2Line,
} from "react-icons/ri";
import { MdOutlineAccountBalance } from "react-icons/md";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { TiLocationArrowOutline } from "react-icons/ti";
import { TbReceipt } from "react-icons/tb";
import { PiWebhooksLogo } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHelpSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { siteImagesPath } from "@/config/images";
import { useTheme } from "next-themes";
import { RiMenu3Fill } from "react-icons/ri";

interface LinkTypes {
  title: string;
  path: string;
  icon: any;
}

const Links: LinkTypes[] = [
  {
    title: "Dashboard",
    icon: <RiDashboardHorizontalFill size={24} />,
    path: "/dashboard",
  },
  {
    title: "Accounts",
    icon: <MdOutlineAccountBalance size={24} />,
    path: "/dashboard/accounts",
  },
  {
    title: "Inward",
    icon: <RiFileHistoryLine size={24} />,
    path: "/dashboard/inward",
  },
  {
    title: "Transactions",
    icon: <HiMiniArrowsRightLeft size={24} />,
    path: "/dashboard/transactions",
  },
  {
    title: "Cash Out",
    icon: <TiLocationArrowOutline size={24} />,
    path: "/dashboard/transfer",
  },
  {
    title: "Bills & Utilities",
    icon: <TbReceipt size={24} />,
    path: "/dashboard/utilities",
  },
  {
    title: "Webhooks",
    icon: <PiWebhooksLogo size={24} />,
    path: "/dashboard/webhook",
  },
  {
    title: "Settings",
    icon: <IoSettingsOutline size={24} />,
    path: "/dashboard/settings",
  },
  {
    title: "Help",
    icon: <IoHelpSharp size={24} />,
    path: "/dashboard/help",
  },
];

export const Sidebar = ({ CloseSideNav }: { CloseSideNav: () => void }) => {
  const router = useRouter();
  const { theme } = useTheme();
  const currentPath = router.pathname;

  return (
    <aside className="min-h-screen">
      <div className="md:flex md:w-max lg:w-56 transition-all duration-500 ease-in-out">
        <nav className="px-2 lg:px-6 flex flex-col w-full items-center">
          {/* Nav Head */}
          <div className="h-[100px] w-full flex items-center justify-between md:justify-center">
            {/* Profile */}
            <div className="flex items-center gap-3">
              {/* image */}
              <Image
                src={siteImagesPath.lady2}
                style={{ objectFit: "cover" }}
                alt="profilepic"
                quality={50}
                className="rounded-full h-[37px] sm:h-[43px] w-[37px] sm:w-[43px] flex items-center justify-center"
              />
              <div className=" md:hidden lg:flex flex-col">
                <h1 className="font-semibold text-[14px]">Nora Watson</h1>
                <p className="text-[10px] mt-[-2px] opacity-60">ID:D2K4SN7SS</p>
              </div>
            </div>
            <div className="flex md:hidden">
              <RiMenu2Line
                role="presentation"
                className=" cursor-pointer"
                size={20}
                onClick={CloseSideNav}
              />
            </div>
          </div>

          <ul className="w-full flex flex-col gap-3">
            {Links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`flex w-[80%] md:w-full cursor-pointer items-center gap-2 px-4 py-3 lg:py-2 rounded-lg ${
                    currentPath === link.path ? "bg-secondary text-black " : ""
                  }`}
                >
                  {link.icon}
                  <p
                    className={`md:hidden lg:flex text-sm font-medium ${currentPath === link.path ? "" : ""}`}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
