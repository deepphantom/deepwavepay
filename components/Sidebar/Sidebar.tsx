import { useRouter } from "next/router";
import { RiDashboardHorizontalFill, RiFileHistoryLine } from "react-icons/ri";
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

export const Sidebar = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const currentPath = router.pathname;

  return (
    <aside className="min-h-screen">
      <div className="w-0 hidden sm:flex sm:w-max lg:w-56 transition-all duration-500 ease-in-out">
        <nav className="px-2 lg:px-6 flex flex-col w-full items-center">
          {/* Nav Head */}
          <div className="h-[100px] flex items-center justify-center">
            <Link
              href="/dashboard"
              className={`${theme == "dark" && "filter invert"}`}
            >
              <Image
                src={siteImagesPath.appLogo}
                style={{ objectFit: "cover" }}
                alt="sitelogo"
                className="w-[110px] sm:w-[130px] hidden lg:flex"
              />
              <Image
                src={siteImagesPath.appIcon}
                style={{ objectFit: "cover" }}
                alt="sitelogo"
                className="w-[30px] flex lg:hidden"
              />
            </Link>
          </div>

          <ul className="w-full flex flex-col gap-3">
            {Links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`flex w-full cursor-pointer items-center gap-2 px-4 py-3 lg:py-2 rounded-lg ${
                    currentPath === link.path ? "bg-secondary text-black " : ""
                  }`}
                >
                  {link.icon}
                  <p
                    className={`hidden lg:flex text-sm font-medium ${currentPath === link.path ? "" : ""}`}
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
