
import { FaChevronDown } from "react-icons/fa6";
const UserTabs = () => {
    return (
        <section className="w-7xl mx-auto py-20">
               <div className="flex items-center justify-between">
            <div>
                <ul className="flex items-center gap-8">
                    <li><a href="#" className="font-medium">Work <span className="text-gray-300">11</span></a></li>
                    <li><a href="#" className="font-medium text-gray-500 hover:text-black duration-300 cursor-pointer">Projects <span className="text-gray-300">01</span></a></li>
                    <li><a href="#" className="font-medium text-gray-500 hover:text-black duration-300 cursor-pointer">Collections <span className="text-gray-300">45</span></a></li>
                    <li><a href="#" className="font-medium text-gray-500 hover:text-black duration-300 cursor-pointer">Licked Shorts <span className="text-gray-300">123</span></a></li>
                    <li><a href="#" className="font-medium text-gray-500 hover:text-black duration-300 cursor-pointer">About</a></li>
                </ul>
            </div>
            <div>
               <button className="flex items-center gap-2 border py-2 px-4 rounded-xl border-gray-300 font-semibold text-sm text-gray-500 hover:text-gray-400 duration-300 cursor-pointer">Resent Shorts <FaChevronDown className="text-gray-500 w-3 h-3 hover:text-gray-400 duration-300 cursor-pointer"/></button> 
            </div>
         </div>
        </section>
    );
};

export default UserTabs;