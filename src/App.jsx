import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import LoginPage from "./pages/LoginPage";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const isLoggedIn = true;
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />

         <Route
          path="/UserProfilePage"
          element={isLoggedIn ? <UserProfilePage/> : <Navigate to="/login" />}
        />
        
         <Route path="/loginpage" element={<LoginPage />} /> 
         <Route path="/dashboard" element={<Dashboard/>} /> 
          <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
