import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Product from "./components/Admin/Product/Product";
import Create from "./components/Admin/Product/Create";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import CreateProfile from "./components/Admin/Customer/CreateProfile";
import DisplayProfile from "./components/Admin/Customer/DisplayProfile";
import Complaint from "./components/Admin/Customer/Complaint";
import Edit from "./components/Admin/Customer/ListView";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={[<Navbar />, <Home />, <Footer />]} />
          <Route path="/login" element={[<Navbar />, <Login />, <Footer />]} />
          <Route path="/about" element={[<Navbar />, <About />, <Footer />]} />
          <Route path="/contact" element={[<Navbar />, <Contact />, <Footer />]} />
          <Route path="/services" element={[<Navbar />, <Services />, <Footer />]} />

          {/* Admin */}
          <Route path="/createprofile" element={<CreateProfile/>} />
          <Route path="/displayprofile" element={<DisplayProfile/>}/>
          <Route path="/complaint" element={<Complaint/>}/>

          <Route
            path="/admin-dashboard/:username"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
           <Route
            path="/listview"
            element={
              <PrivateRoute>
                <Edit />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
