import { FaChevronDown } from "react-icons/fa6";
import { SlidersHorizontal } from 'lucide-react';


const Sub_header = () => {
    return (
   
            <header className="w-6xl mx-auto flex items-center justify-between p-6">
                <section>
                   <button className="flex items-center gap-2 border py-2 px-4 rounded-xl border-gray-300 font-normal text-sm text-[#252525] hover:text-gray-400 duration-300 cursor-pointer">Following <FaChevronDown className="text-[#252525] w-3 h-3 hover:text-gray-400 duration-300 cursor-pointer"/></button>
                </section>
                <section>
                    <ul className="flex items-center gap-4">
                        <li className="font-medium bg-gray-100 py-2 px-3 rounded-lg cursor-pointer">Discover</li>
                        <li className="text-gray-600 hover:text-black duration-200 cursor-pointer">Animation</li>
                        <li className="text-gray-600 hover:text-black duration-200 cursor-pointer">Branding</li>
                        <li className="text-gray-600 hover:text-black duration-200 cursor-pointer">Illustration</li>
                        <li className="text-gray-600 hover:text-black duration-200 cursor-pointer">Mobile</li>
                        <li className="text-gray-600 hover:text-black duration-200 cursor-pointer">Print</li>
                        <li className="text-gray-600 hover:text-black duration-200 cursor-pointer">Product Design</li>
                        <li className="text-gray-600 hover:text-black duration-200 cursor-pointer">Typography</li>
                        <li className="text-gray-600 hover:text-black duration-200 cursor-pointer">Web Design</li>
                    </ul>
                </section>
                <section>
                    <button className="flex items-center gap-3 border py-2 px-4 rounded-xl border-gray-300 font-normal text-sm hover:text-gray-400 duration-300 cursor-pointer"><SlidersHorizontal className="w-4 h-4 hover:text-gray-400 duration-300 cursor-pointer"/>Filters </button>
                </section>
  
            </header>
        
    );
};

export default Sub_header;