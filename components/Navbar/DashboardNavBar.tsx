import { Dashboardtitle, onboardtitle } from "../primitives";
import { ThemeSwitch } from "../theme-switch";

export const DashboardNavbar = ({ title }: { title: string }) => {
  return (
    <div className="h-[70px] justify-between sm:h-[100px] sticky top-0 bg-dashboardBg flex items-center">
      <h1 className={Dashboardtitle({ size: "md" })}>{title}</h1>
      <ThemeSwitch />
    </div>
  );
};
