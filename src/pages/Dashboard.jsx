import { PiDotOutlineFill } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import Footer from "../Components/Footer";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Dashboard = () => {
    return (
       <section>
        <div className="w-4xl m-auto flex items-center justify-between pt-8">
            <div className="flex items-center justify-center gap-1">
            <img src="/image/dashboard/image.png"  />
            <div className="">
                <h3 className="font-semibold text-lg  ">Crypik - Crypto Wallet Dashboard</h3>
                <div className="flex items-center">
                    <p>Clair Danko🌻 for Dank</p>
                    <button className="flex items-center justify-center"><PiDotOutlineFill className="text-gray-400"/>Follow</button>
                    <button className="flex items-center justify-center text-violet-600"><PiDotOutlineFill className="text-gray-400"/>Hire Us</button>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center gap-3">
            <button className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gray-200 hover:text-violet-400 duration-400 cursor-pointer"><FaRegBookmark />Save</button>
            <button className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-violet-400 text-white cursor-pointer hover:bg-violet-300 duration-300"><BsFillHeartFill className="hover:text-red-500 duration-300"/>Like</button>
        </div>
        </div>

        <div className="w-5xl m-auto">
           <img src="/image/dashboard/img1.png" alt="dashboard" className="w-[1000px] h-[700px] bg-cover m-auto pt-10"/>
        </div>
        <div className="w-5xl m-auto">
         <h2 className="text-center py-15 text-5xl font-extrabold">Good day to y'all! 🌼</h2>
         <p className="text-center text-xl text-gray-600 leading-8">Proud to share my latest exploration for Crypik - Crypto Wallet Dashboard <br /> Do you have any thoughts or feedback? Please leave your comment. <br /> Hope you guys enjoy it and press "L" if you like it ❤️</p>

         <img src="/image/dashboard/img2.png" alt="dashboard" className="w-[1000px] h-[700px] bg-cover m-auto pt-10"/>
         <img src="/image/dashboard/img3.png" alt="dashboard" className="w-[1000px] h-[700px] bg-cover m-auto pt-10"/>
          
          <div className="flex items-center justify-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
             <img src="/image/dashboard/Leaf.png" alt="image" className="py-10"/>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
        </div>

        <div>
            <div className="w-7xl m-auto ">
                <div className="flex items-center justify-between py-7">
                <h2 className="text-xl font-semibold">More by Clair</h2>
                <button className="text-base  font-semibold text-violet-800">View All</button>
                </div>
            </div>
        </div>

        <div className="w-7xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20">
            <div>
                <img src="/image/dashboard/img3.png" />
                <div className="flex items-center justify-between">
                    <div className="flex items-center  gap-2 pt-3">
                        <img src="/image/dashboard/Fossa.png" />
                        <h2 className="font-semibold">Ever</h2>
                         <img src="/image/dashboard/text.png" /> 
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                         <FaHeart  className="text-gray-300 hover:text-rose-700 duration-300 cursor-pointer"/> <p className="hover:text-gray-500 duration-200 cursor-pointer">450</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEye className="text-gray-300 hover:text-gray-800 duration-300 cursor-pointer"/> <p className="hover:text-gray-500 duration-200 cursor-pointer">1.1k</p>
                         </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/image/dashboard/img4.png" />
                <div className="flex items-center justify-between">
                    <div className="flex items-center  gap-2 pt-3">
                        <img src="/image/dashboard/Treva.png" />
                        <h2 className="font-semibold">Ever</h2>
                         <img src="/image/dashboard/text.png" /> 
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                         <FaHeart  className="text-gray-300 hover:text-rose-700 duration-300 cursor-pointer"/> <p className="hover:text-gray-500 duration-200 cursor-pointer">344</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEye className="text-gray-300 hover:text-gray-800 duration-300 cursor-pointer"/> <p className="hover:text-gray-500 duration-200 cursor-pointer">1.9k</p>
                         </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/image/dashboard/img2.png" />
                <div className="flex items-center justify-between">
                    <div className="flex items-center  gap-2 pt-3">
                        <img src="/image/dashboard/Leaf.png" />
                        <h2 className="font-semibold">Ever</h2>
                         <img src="/image/dashboard/text.png" /> 
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                         <FaHeart  className="text-gray-300 hover:text-rose-700 duration-300 cursor-pointer"/> <p className="hover:text-gray-500 duration-200 cursor-pointer">184</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEye className="text-gray-300 hover:text-gray-800 duration-300 cursor-pointer"/> <p className="hover:text-gray-500 duration-200 cursor-pointer">1.2k</p>
                         </div>
                    </div>
                </div>
            </div>

            

        </div>

        <Footer/>
       </section>
    );
};

export default Dashboard;