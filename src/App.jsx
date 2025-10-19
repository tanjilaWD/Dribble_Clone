import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./Components/Header";
import UserProfilePage from "./pages/UserProfilePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const isLoggedIn = true;
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

         <Route
          path="/UserProfilePage"
          element={isLoggedIn ? <UserProfilePage/> : <Navigate to="/login" />}
        />
        
         <Route path="/loginpage" element={<LoginPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
