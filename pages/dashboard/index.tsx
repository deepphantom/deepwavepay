import { title } from "@/components/primitives";
import DashboardLayout from "@/layouts/dashboard/dashboardlayout";
import DefaultLayout from "@/layouts/default";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Dashboard</h1>
        </div>
      </section>
    </DashboardLayout>
  );
}
