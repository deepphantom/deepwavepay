import { DateToday } from "@/layouts/datetoday";
import { DashboardSubtitle, Dashboardtitle, onboardtitle } from "../primitives";
import { ThemeSwitch } from "../theme-switch";
import { IoMenuOutline, IoNotifications } from "react-icons/io5";
import Image from "next/image";
import { siteImagesPath } from "@/config/images";
import { RiMenu3Fill } from "react-icons/ri";

export const DashboardNavbar = ({
  title,
  action,
}: {
  title: string;
  action: () => void;
}) => {
  return (
    <div className="h-[80px] z-30 sm:h-[100px] justify-between sticky top-0 bg-dashboardBg flex items-center">
      <div className="flex items-center gap-4">
        <RiMenu3Fill
          role="presentation"
          onClick={action}
          className="flex md:hidden cursor-pointer"
          size={20}
        />
        <div>
          <h1 className={Dashboardtitle({ size: "md" })}>{title}</h1>
          <p className={DashboardSubtitle()}>{DateToday}</p>
        </div>
      </div>
      <div className=" flex items-center gap-4">
        <div className="flex items-center gap-2">
          {/* Themeswitch */}
          <div
            style={{ borderWidth: 1 }}
            className="rounded-lg h-[35px] sm:h-[40px] w-[35px] sm:w-[40px] flex items-center justify-center border border-gray-300"
          >
            <ThemeSwitch />
          </div>

          {/* Notifications */}
          <div
            style={{ borderWidth: 1 }}
            className="rounded-lg h-[35px] sm:h-[40px] w-[35px] sm:w-[40px] flex items-center justify-center border border-gray-300"
          >
            <IoNotifications />
          </div>
        </div>

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
          <div className="hidden sm:flex flex-col">
            <h1 className="font-semibold text-[14px]">Nora Watson</h1>
            <p className="text-[10px] mt-[-2px] font-medium">
              ID:<span className="opacity-60">D2K4SN7SS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
