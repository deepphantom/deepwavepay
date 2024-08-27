import { DashboardNavbar } from "@/components/Navbar/DashboardNavBar";
import { DashboardSubtitle, Dashboardtitle } from "@/components/primitives";
import DashboardLayout from "@/layouts/dashboard/dashboardlayout";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa6";
import { RiCoinsFill } from "react-icons/ri";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <section className="block xl:flex items-start justify-between gap-4">
        {/* Main Content */}
        <div className="flex flex-wrap sm:flex-nowrap w-full xl:basis-[75%] justify-between gap-4">
          <div className="h-[130px] w-full flex flex-col gap-2 justify-center py-3 px-4 items-start xl:w-auto xl:basis-[31%] rounded-xl bg-purpleColor">
            {/* Top */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#B6B0E3] rounded-full">
                <MdAccountBalanceWallet color="black" size={16} />
              </div>
              <p className="text-black">Account Balance</p>
            </div>

            {/* Content */}
            <div className="flex items-center w-full flex-col">
              <h1 className={`${Dashboardtitle({ size: "sm" })} text-black`}>
                £2,545.09
              </h1>
              <p className=" text-[12px] text-black">Withdrawable balance</p>
            </div>
          </div>
          <div className="h-[130px] w-full flex flex-col gap-2 justify-center py-3 px-4 items-start xl:w-auto xl:basis-[31%] rounded-xl bg-blueColor">
            {/* Top */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#98B4E3] rounded-full">
                <FaMoneyBillWave color="black" size={16} />
              </div>
              <p className="text-black">Ledger Balance</p>
            </div>

            {/* Content */}
            <div className="flex items-center w-full flex-col">
              <h1 className={`${Dashboardtitle({ size: "sm" })} text-black`}>
                £10,342.10
              </h1>
              <p className=" text-[12px] text-black">Available by tomorrow</p>
            </div>
          </div>
          <div className="h-[130px] w-full flex flex-col gap-2 justify-center py-3 px-4 items-start xl:w-auto xl:basis-[31%] rounded-xl bg-greenColor">
            {/* Top */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#85CCA5] rounded-full">
                <RiCoinsFill color="black" size={16} />
              </div>
              <p className="text-black">Total collection</p>
            </div>

            {/* Content */}
            <div className="flex items-center w-full flex-col">
              <h1 className={`${Dashboardtitle({ size: "sm" })} text-black`}>
                £500,145.22
              </h1>
              <p className=" text-[12px] text-black">Life time collection</p>
            </div>
          </div>
        </div>
        {/* Side Content */}
        <div className="mt-4 xl:mt-0 xl:basis-[22%] w-full bg-blue-950 p-4 rounded-xl">
          <p className="text-white">Side Content</p>
        </div>
      </section>
    </DashboardLayout>
  );
}
