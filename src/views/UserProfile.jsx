import { CiCirclePlus } from "react-icons/ci";
import Button from "../Components/Ui/Button";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import UserTabs from "../pages/UserTabs";



const UserProfile = () => {
    return (
        <div>
        <section className="w-7xl mx-auto py-20 px-4 flex">
            
        <div className="w-5/12">
          <img src="/image/userpage/img.png" alt="" />
          <h2 className="text-4xl font-semibold my-10">Rebeca Chenford</h2>
          <h1 className="text-5xl font-bold leading-[1.5]">I’m UX/UI Designer <br /> at Microtech 👋</h1>  
          <div className="flex items-center gap-3 my-5">
            <p className="font-bold text-base text-gray-500">ON TEAMS</p>
            <img src="/image/userpage/Earth.png" className="w-10 h-10"/>
          </div>
          <div className="flex items-center gap-5">
            <button className="flex items-center py-2 px-4  rounded-xl gap-2 bg-gray-200 font-semibold hover:text-gray-600 duration-300 cursor-pointer"><CiCirclePlus />Follow</button>
            <Button icon={<LiaEnvelopeOpenTextSolid />} text="Hire Me"/>
            <button className=" py-3 px-6  rounded-xl border border-gray-300 my-2 hover:text-violet-700 duration-300 cursor-pointer hover:bg-gray-100"><TfiLayoutLineSolid /></button>
          </div>
        </div>

        <div className="w-7/12">
            <img src="/image/userpage/fram.png" className="rounded-xl hover:shadow-xl duration-500" />
        </div>
         
       </section>
        <UserTabs/>
     </div>
       
      
        
    );
};

export default UserProfile;