import Footer from "../Components/Footer";
import Header from "../Components/Header";
import UserCard from "../views/UserCard";
import UserProfile from "../views/UserProfile";


const UserProfilePage = () => {
    return (
        <div>
            <Header/>
           <UserProfile/>
           <UserCard/>
            <Footer/>
        </div>
    );
};

export default UserProfilePage;