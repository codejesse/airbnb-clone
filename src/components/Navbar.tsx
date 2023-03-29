import { Global, HambergerMenu, ProfileCircle, SearchNormal1 } from "iconsax-react";
import navLogo from "../assets/airbnb-logo.png"
import "../fonts/GeneralSans-Regular.ttf"
import Options from "./Options";

//here will create the logic for the onClick function to expand the search bar
//when the onclick function is fired change state value to true and if the value is true the styles should be conditionally added

const Navbar = () => {
    return (
        <div className="relative z-[100] overflow-hidden">
            <div className="fixed w-full bg-white">
                <div className="flex flex-row border-b border-slate-100 w-full h-[90px] m-auto z-50">
                    <div className="hidden md:block xl:block lg:block sm:hidden m-4 pl-5">
                        <img className="w-full" src={navLogo} alt="nav-logo" />
                    </div>
                    <div className="m-auto pl-16">
                        <div className="relative mx-auto text-gray-600">
                            <input className="border border-[#D5D5D5]-100 hover:shadow-sm transition ease-in-out delay-100 cursor-pointer bg-white h-[50px] shadow-lg w-full xl:w-[360px] sm:w-full px-5 pr-16 rounded-full text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search">
                            </input>
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 w-8 h-8 bg-[#FF5A5F] hover:bg-[#FF5A5F] font-medium rounded-full text-sm px-2 py-2"><SearchNormal1 size={18} style={{margin: "auto", marginRight: "-1px"}} /></button>
                        </div>
                    </div>
                    <div className="hidden xl:flex md:flex lg:flex pr-7 flex flex-row">
                        <div className="flex flex-row gap-1 m-auto">
                            <p className="text-sm">Airbnb your home</p>
                            <p className="m-auto"><Global style={{ width: "18px" }} /></p>
                        </div>
                        <div className="m-4">
                            <div className="flex flex-row border rounded-full p-3 gap-1 m-auto"><HambergerMenu style={{margin: "auto"}}  /> <ProfileCircle style={{margin: "auto"}} size={32} color="#D5D5D5"
                                variant="Bulk" /></div>
                        </div>
                    </div>
                </div>
                <Options />
            </div>
        </div>
    );
}

export default Navbar;