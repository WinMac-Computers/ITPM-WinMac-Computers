import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// common
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import CreateProfile from "./components/Admin/Customer/CreateProfile";
import Pcreate from "./components/Admin/Product/Create";
import Payedit from "./components/Admin/Payment/Edit.jsx";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Riderlist from "./components/Admin/Delivery/Riderlist";
import AddRider from "./components/Admin/Delivery/AddRider";
import UpdateRider from "./components/Admin/Delivery/UpdateRider";
import Orders from "./components/Admin/Delivery/Orders";
import Address from "./components/Admin/Delivery/Address";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>


          <Route path="/" element={[<Navbar />, <Home />, <Footer />]} />
          <Route path="/login" element={[<Navbar />, <Login />, <Footer />]} />
          <Route path="/about" element={[<Navbar />, <About />, <Footer />]} />
          <Route
            path="/contact"
            element={[<Navbar />, <Contact />, <Footer />]}
          />
          <Route
            path="/services"
            element={[<Navbar />, <Services />, <Footer />]}
          />

          {/* Admin */}
          <Route path="/createprofile" element={<CreateProfile />} />


          {/* delivery */}
          <Route path="/riderlist" element={<Riderlist />}  />
          <Route path="/addrider" element= {<AddRider/>} />
          <Route path="/updaterider/:id" element= {<UpdateRider />}  />
          <Route path="/orders" element= {<Orders />}  />
          <Route path="/address" element= {<Address/>} />

          <Route
            path="/admin-dashboard/:username"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin-dashboard/:username/create"
            element={
              <PrivateRoute>
                <Pcreate />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/:username/edit"
            element={
              <PrivateRoute>
                <Payedit />
              </PrivateRoute>
            }
          />
              
        </Routes>
      </Router>
    </div>
  );
};

export default App;
