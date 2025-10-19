import { PiDotOutlineFill } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";

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

       </section>
    );
};

export default Dashboard;