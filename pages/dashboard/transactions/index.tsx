import { DashboardNavbar } from "@/components/Navbar/DashboardNavBar";
import { title } from "@/components/primitives";
import { ThemeSwitch } from "@/components/theme-switch";
import DashboardLayout from "@/layouts/dashboard/dashboardlayout";
import DefaultLayout from "@/layouts/default";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <section className="bg-dashboardBg h-full">
        <DashboardNavbar title="Transactions" />
      </section>
    </DashboardLayout>
  );
}
