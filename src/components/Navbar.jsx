import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react"; 

function NavBt({addStyle}){
    return(
        <button className={`cursor-pointer text-sm font-medium text-white bg-blue-600 
        px-6 py-2.5 rounded-lg hover:shadow-md hover:shadow-blue-600/40
        transition-all duration-300 ${addStyle}`}>
            <a href="">Get in touch</a>
        </button>
    )
}
function Navbar(){
    const [toggleMenu,setToggleMenu] = useState(false)
    const [active,setActive] = useState("Home")
    const navItems=[
        {label:"Home" , href:"#home"},
        {label:"About Us" , href:"#about"},
        {label:"Our Services" , href:"#services"},
        {label:"Testimonials" , href:"#testimonials"}
    ]
    return(
        <>
            <nav className="w-full fixed left-0 top-0 bg-gray-50/90 z-50 shadow-sm border-b border-gray-100">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto backdrop-blur-sm  h-16 md:h-20 flex justify-between items-center">
                    <div className="flex">
                        <span className="block size-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></span>
                        <span className="block size-4 bg-red-500 rounded-full hover:opacity-75 transition-opacity -ml-1"></span>
                    </div>
                    <div className="md:hidden" onClick={()=>{setToggleMenu(!toggleMenu)}}>
                        {toggleMenu?<AiOutlineClose className="size-6"/>:<FiMenu className="size-6"/>}
                    </div>
                    <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
                        {
                        navItems.map((item,index)=>{
                            return (
                                <li className="transition-colors after:left-0 after:w-0 after:absolute after:-bottom-1 relative
                                after:h-0.5 after:transition-all hover:after:w-full after:bg-blue-600 hover:text-gray-900 "
                                key={index}
                                onClick={()=>setActive(item.label)}>
                                    <a href={item.href} className={`${item.label===active?"text-blue-600":""} transition-colors`}>{item.label}</a>
                                </li>
                            )
                        })
                        }
                    </ul>
                    <NavBt addStyle="hidden md:block"/>
                </div>
                {toggleMenu&&(
                    <div className="py-4 absolute mt-1 w-full bg-white shadow-sm border-b border-gray-100  md:hidden">
                        <ul className="container px-4 sm:px-6 mx-auto">
                            {navItems.map((item,index)=>{
                                return <li key={index} className="py-4 text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium"
                                onClick={()=>setActive(item.label)}>
                                    <a href={item.href} className={`${item.label===active?"text-blue-600":""} transition-colors`}>{item.label}</a>
                                </li>
                            })}
                               <NavBt addStyle="w-full"/>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar