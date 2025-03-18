import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Auth from './components/Login/Auth'
import Merchandise from './components/Merchandise/Merchandise';
import Contactus from './components/Contact/Contactus';
import Booking from './components/Booking/Booking';
import Dashboard from './components/Admin/Dashboard';
import Subscribers from './components/Admin/Subscribers';
import ProtectedRoute from './components/Login/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import EditArtists from './components/Admin/EditArtists';



function App() {

  return (
    <>
      <Router>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/shop" element={<Merchandise />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contactus" element={<Contactus />}></Route>
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredRole="admin">
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredRole="admin">
                <Dashboard />
              </ProtectedRoute>
            } >
            <Route path="edit-artists" element={<EditArtists />} />
            <Route path="manage-subscribers" element={<Subscribers />} />
          </Route>



        </Routes>

      </Router>

    </>
  );
}

export default App;


