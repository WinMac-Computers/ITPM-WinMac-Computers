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

import Edit from "./components/Admin/Customer/ListView";

import Dashboard from "./components/Admin/Dashboard/Dashboard";
import UserDashboard from "./components/User/Dashboard";
import Pcreate from "./components/Admin/Product/Create";
import Payedit from "./components/Admin/Payment/Edit";
import Complaint from "./components/Admin/Complaint/Complaint";
import ComplaintForm from "./components/Admin/Complaint/ComplaintForm";

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

          <Route
            path="/admin-dashboard/:username"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/user-dashboard/:username"
            element={
              <PrivateRoute>
                <Navbar />
                <UserDashboard />
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

          <Route
            path="/admin-dashboard/:username/create"
            element={
              <PrivateRoute>
                <Pcreate />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/:username/csm-complaint"
            element={
              <PrivateRoute>
                <ComplaintForm />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/admin-dashboard/edit/:id"
            element={
              <PrivateRoute>
                <Payedit />
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
