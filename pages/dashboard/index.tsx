import { DashboardNavbar } from "@/components/Navbar/DashboardNavBar";
import { DashboardSubtitle, Dashboardtitle } from "@/components/primitives";
import DashboardLayout from "@/layouts/dashboard/dashboardlayout";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa6";
import { RiCoinsFill } from "react-icons/ri";
import PropTypes from "prop-types";
import countries from "../../public/files/data/countryAndFlag.json";
import countriesLocal from "../../public/files/data/countryAndFlagLocal.json";
import { Input, Select, SelectItem } from "@nextui-org/react";

const CountrySelect = (props: any) => {
  const { option, ...rest } = props;
  return (
    <Select {...rest} label="Country" className="">
      {countries.map((country) => (
        <SelectItem key=""> {option(country)} </SelectItem>
      ))}
    </Select>
  );
};

CountrySelect.propTypes = {
  option: PropTypes.func,
};

CountrySelect.defaultProps = {
  option: ({ cca2, flag, name }: any) => (
    <option value={cca2} key={cca2}>
      {`${flag} ${name}`}
    </option>
  ),
};

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
        <div className="mt-4 xl:mt-0 xl:basis-[22%] flex flex-wrap lg:flex-nowrap xl:flex-wrap gap-4 w-full rounded-xl">
          <div className="w-full h-[320px] flex flex-col justify-between bg-[#1E9AA3] p-5 rounded-xl">
            {/* Country Selection */}
            <div className="flex items-center w-full justify-between">
              {/* Country */}
              <div className="flex w-full gap-3">
                <select
                  aria-label="sending"
                  className="bg-white outline-none w-[50%] h-[45px] px-1 rounded-md text-black"
                >
                  {countries.map((country) => (
                    <option key={country.code} className="text-black">
                      {country.flag + " " + country.name}
                    </option>
                  ))}
                </select>
                <select
                  aria-label="receiving"
                  className="bg-white outline-none w-[50%] h-[45px] px-1 rounded-md text-black"
                >
                  {countriesLocal.map((country) => (
                    <option key={country.code} className="text-black">
                      {country.flag + " " + country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Input */}
            <div className=" w-full flex flex-col gap-3">
              <div className="flex flex-col gap-1 text-white">
                <p>You send (GBP)</p>
                <Input
                  type="number"
                  value={"1"}
                  size="lg"
                  radius="sm"
                  style={{ color: "black" }}
                  classNames={{
                    input: [],
                    innerWrapper: [],
                    inputWrapper: [
                      "h-[45px]",
                      "bg-onboardWhite", // BG - color
                      "group-data-[focus=true]:bg-onboardWhite", // Focus on !Focus (Blur)
                      "group-data-[hover=true]:bg-onboardWhite", // Hover
                      "dark:group-data-[focus=true]:text-black", // Text Color
                    ],
                  }}
                />
              </div>
              <div className="flex flex-col gap-1 text-white">
                <p>You receive (NGN)</p>
                <Input
                  type="number"
                  value={"1000"}
                  style={{ color: "black" }}
                  size="lg"
                  radius="sm"
                  classNames={{
                    input: [],
                    innerWrapper: [],
                    inputWrapper: [
                      "h-[45px]",
                      "bg-onboardWhite", // BG - color
                      "group-data-[focus=true]:bg-onboardWhite", // Focus on !Focus (Blur)
                      "group-data-[hover=true]:bg-onboardWhite", // Hover
                      "dark:group-data-[focus=true]:text-black", // Text Color
                    ],
                  }}
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-[14px] text-white">Rate: $1 = 450.00 NGN</p>
              <p className="text-[14px] text-white">No transfer fees</p>
            </div>
          </div>
          <div className="w-full h-[220px] bg-red-950 rounded-xl"></div>
          <div className="w-full h-[300px] bg-red-950 mb-8 rounded-xl"></div>
        </div>
      </section>
    </DashboardLayout>
  );
}
