import { purpose } from "../assets/data.jsx"
function Purpose(){
    return(
        <section className="bg-gray-50 py-16">
            <div className="container max-w-7xl px-4 sm:px-8 mx-auto flex flex-col md:flex-row gap-10 lg:gap-28 md:items-center lg:items-start">
                <div>
                    <h2 className="text-purple-600 font-medium mb-3.5">ACHIEVE MORE</h2>
                    <p className="text-3xl md:text-4xl/10 font-bold text-gray-800">Purpose of a convoy is to keep your team</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {purpose.map((ele,index)=>{
                        return (
                            <div className="flex flex-row md:flex-col lg:flex-row md:items-center lg:items-start gap-4 lg:gap-8 group">
                                <span className="sm:mt-3.5 md:mt-0 lg:mt-3.5">{ele.icon}</span>
                                <div className="md:text-center lg:text-left">
                                    <h2 className="font-semibold text-xl mb-1.5 text-gray-900">{ele.title}</h2>
                                    <p className="text-gray-600 text-[15px]/7 tracking-wide ">{ele.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Purpose