import { FaStar } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Rocket from "../assets/bulb.png";

function Hero(){
    return(
        <div>
            <span className="-z-50 absolute -top-2 -left-5 rounded-full bg-linear-to-r from-indigo-400/25 to-pink-600/25 size-96 blur-[100px]"></span>
            <div className="gap-10 flex flex-col md:flex-row container px-4 sm:px-6 mx-auto items-center pt-44 lg:pt-52 pb-20 md:pb-44">
                <div className="md:w-1/2">
                    <span className="text-sm font-semibold transition-colors group text-gray-900 bg-white rounded-full px-3 py-3 hover:bg-gray-50 duration-300 mb-8 flex items-center gap-2 w-fit">
                        <FaStar className="text-blue-600 group-hover:scale-125 transition-all group-hover:rotate-45"/>
                        Jump start your growth
                    </span>
                    <h1 className="text-4xl/tight tracking-wide md:text-5xl/tight lg:text-6xl/tight mb-8 font-extrabold ">
                        We boost the growth for <span className="text-blue-600">Startup to Fortune 500</span> Companies 
                        <span className="animate-pulse">⏰</span> 
                    </h1>
                    <p className="text-gray-600 md:text-lg/snug tracking-wider mb-8 font-light md:font-normal">
                        Get the most accurate leads, sales people training and conversions, tools and more — all within the same one billing. 
                    </p>
                    <form className="flex gap-2.5 w-full">
                        <input type="email" placeholder="Email address" className="flex-1 w-0 border rounded-xl py-4 pl-5 transition-colors focus:border-blue-600 focus:shadow-xs focus:shadow-blue-600 border-gray-300 focus:outline-none md:max-w-96"/>
                        <button className="bg-blue-600 rounded-xl hover:shadow-md hover:shadow-blue-600/40
                        transition-all duration-300 px-7 md:text-xl"><FaArrowRightLong className="text-white"/></button>
                    </form>
                </div>
                <div className="md:w-1/2 flex md:justify-end">
                    <img src={Rocket} alt="" className="w-full max-w-[370px] md:max-w-[600px]"/>
                </div>
            </div>
        </div>
    )
}
export default Hero