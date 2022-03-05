import { Route, Routes } from 'react-router-dom';
import AdminRoute from './component/Admin_route/Admin_route';
import Private_route from './component/Private_Route/Private_route';
import HotelBooking from './component/profile/HotelBooking';
import Service from './component/service/Service';
import Footer from './component/sheared/Footer';
import Header from './component/sheared/Header';
import AuthProvider from './context/context';
import About from './page/About';
import Blog from './page/Blog';
import EdateProfile from './page/EdateProfile';
import Home from './page/Home';
import Hotel from './page/Hotel';
import HotelDetails from './page/HotelDetails';
import Login from './page/Login';
import MyTour from './page/MyTour';
import PageNotfound from './page/PageNotfound';
import Profile from './page/Profile';
import Ratting from './page/Ratting';
import Registrition from './page/Registrition';
import ServiceDetails from './page/ServiceDetails';

function App() {
  return (
    <div>
    <AuthProvider>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registrition />} />
      <Route path='/service' element={<Service />} />
      <Route path='/hotel' element={<Hotel />} />
      <Route path='/hotelDetail/:id' element={<Private_route><HotelDetails /></Private_route>} />
      <Route path='/serviceDetails/:name' element={<Private_route><ServiceDetails /></Private_route>} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile/*' element={<Profile />} >
         <Route path="Booking-hotel" element={<Private_route><HotelBooking /></Private_route>} />
         <Route path="edate-profile" element={<Private_route><EdateProfile /></Private_route>} />
         <Route path="my-tour" element={<Private_route><MyTour /></Private_route>} />
         <Route path="ratting" element={<Private_route><Ratting /></Private_route>} />
      </Route>
      <Route path="*" element={<PageNotfound />} />
      </Routes>
      <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
