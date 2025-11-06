import img1 from "../assets/amazon.png"
import img2 from "../assets/slack.png"
import img3 from "../assets/meundies.png"
import img4 from "../assets/sitepoint.png"
import img5 from "../assets/woocommerce.png"
import { useState } from "react"
function Slide(){
    const [state,setState]=useState(0)
    const images=[
        img1,img2,img3,img4,img5
    ]
    setInterval(() => {
        setState((s)=>{return s+1})
    }, 500);

    return(
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex flex-col sm:flex-row sm:items-center overflow-hidden relative">
            <div className="text-gray-600 tracking-wide font-medium border-l-4 border-l-blue-500 pl-8 pr-16 md:pr-28 bg-white py-2 mb-7 sm:mb-0 text-nowrap">
                Proud partner at<br></br>
                Hubspot & Segment
            </div>
            <ul className="flex items-center overflow-hidden">
                {
                    images.map((img,index)=>{
                       return <img key={index} src={img} className="mx-10 w-28 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"></img>
                    })
                }
            </ul>
        </div>

    )

}
export default Slide