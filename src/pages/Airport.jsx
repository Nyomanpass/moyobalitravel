import Navbar from "../components/Navbar"
import AirHeader from "../components/airport/AirHeader"
import AirportHome from "../components/home/AirportHome"
import AirportTransferSection from "../components/airport/AirportTransferSection"
import FullFooterSection from "../components/home/FullFooterSection"
import TransferPackagesSection from "../components/airport/TransferPackagesSection"
import { useTranslation } from "react-i18next";

function Airport(){
          const { t } = useTranslation();
    return(
        <>
            <Navbar/>
            <AirHeader/>
            <div className="max-w-7xl mx-auto px-6 lg:px-14">
                    <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-600">
                            {t("airportRoutes.title")}
                        </h2>
                    </div>
                </div>
                <TransferPackagesSection/>
            </div>
            <AirportHome/>
            <AirportTransferSection/>
            <FullFooterSection/>
        </>
    )
}

export default Airport