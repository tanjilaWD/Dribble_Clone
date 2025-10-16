import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const PortfolioCard = ({
    imageUrl,
    teamImageUrl,
    teamName,
    teamText,
    LoveCount,
    ViewCount
}) => {
    return (
        
       <section className="w-95 ">
        <img src={imageUrl} alt="Portfolio Image"className="rounded"/>
        <div className="flex justify-between py-3">
            <div className="flex gap-2 items-center">
            <img src={teamImageUrl} alt="Team Image" />
            <h3 className="font-bold">{teamName}</h3>
            <img src={teamText} alt="" />
            </div>
            <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <FaHeart  className="text-gray-300 hover:text-rose-700 duration-300 cursor-pointer"/> <p className="hover:text-gray-500 duration-200 cursor-pointer">{LoveCount}</p>
            </div>
            <div className="flex items-center gap-2">
                <FaEye className="text-gray-300 hover:text-gray-800 duration-300 cursor-pointer"/> <p className="hover:text-gray-500 duration-200 cursor-pointer">{ViewCount}</p>

            </div>
            </div>
        </div>
       </section>
       
    );
};

export default PortfolioCard;