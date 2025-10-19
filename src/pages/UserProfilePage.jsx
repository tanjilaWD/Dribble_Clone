import Footer from "../Components/Footer";
import UserCard from "../views/UserCard";
import UserProfile from "../views/UserProfile";


const UserProfilePage = () => {
    return (
        <div>
           <UserProfile/>
           <UserCard/>
            <Footer/>
        </div>
    );
};

export default UserProfilePage;