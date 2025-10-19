import CopyRight from "../Components/CopyRight";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Portfolio from "../Components/Portfolio";
import Sub_header from "../Components/Sub_header";
import UserProfilePage from './UserProfilePage';


const HomePage = () => {
  return (
    <div>
      <Header/>
      <Sub_header />
      <Portfolio />
      <Footer />
      <CopyRight />

    </div>
  );
};

export default HomePage;
