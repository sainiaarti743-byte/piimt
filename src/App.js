import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import Home from './pages/Home';
import Header from './pages/Header';
import Foooter from './pages/Foooter';
import About from './pages/About';
import Training from './pages/Training';
import Contact from './pages/Contact';
import FranchiseDetail from './pages/Franchise/FranchiseDetail';
import Franchise from './pages/Franchise/Franchise';
import AllCourses from './pages/Courses/AllCourses';
import WebDevelopment from './pages/Courses/WebDevelopment';
import DigitalMarketing from './pages/Courses/DigitalMarketing';
import HardwareNetwork from './pages/Courses/HardwareNetwork';
import GraphicDesiging from './pages/Courses/GraphicDesiging';
import InternshipIt from './pages/Courses/IntershipIt';
import MobileApp from './pages/Courses/MobileApp';
import PhpBackend from './pages/Courses/PhpBackend';
import AspNet from './pages/Courses/AspNet';
import AwsCloud from './pages/Courses/AwsCloud';
import Artificial from './pages/Courses/Artificial';
import Accounting from './pages/Courses/Accounting';
import DataScience from './pages/Courses/DataScience';
import Login from './pages/Login';
import Register from './pages/Register';
import Admission from './pages/Admission';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Internship from './pages/Franchise/Internship';
import ForgetPassword from './pages/Forgetpassword';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/franchisedetail' element={<FranchiseDetail />} />
        <Route path='/franchise' element={<Franchise />} />
        <Route path='/allcourses' element={<AllCourses />} />
        <Route path='/web-development' element={<WebDevelopment />} />
        <Route path='/digital-marketing' element={<DigitalMarketing />} />
        <Route path='/hardware-network' element={<HardwareNetwork />} />
        <Route path='/graphic-desiging' element={<GraphicDesiging />} />
        <Route path='/internship-it' element={<InternshipIt />} />
        <Route path='/mobile-app-development' element={<MobileApp />} />
        <Route path='/php-backend-development' element={<PhpBackend />} />
        <Route path='/asp-net-development' element={<AspNet />} />
        <Route path='/aws-cloud-computing' element={<AwsCloud />} />
        <Route path='/artificial-intelligence' element={<Artificial />} />
        <Route path='/accounting-erp' element={<Accounting />} />
        
        <Route path='/data-science-ai' element={<DataScience />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/internship' element={<Internship />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />



      </Routes>



      <Foooter />

      <a
        href="https://wa.me/917300180494?text=Hello,%20I%20want%20to%20know%20more%20about%20the%20courses."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        {/* Pure White Official WhatsApp SVG Icon (No dependency on Bootstrap font) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.907h.004c4.368 0 7.926-3.559 7.93-7.93a7.9 7.9 0 0 0-2.327-5.645ZM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.69-2.997c-.202-.101-1.194-.588-1.379-.656-.185-.069-.32-.102-.455.101-.134.202-.52.656-.637.793-.116.135-.234.151-.435.051-.201-.1-.85-.313-1.619-.992-.598-.533-1.002-1.192-1.12-1.393-.117-.2-.013-.309.088-.41.09-.091.202-.234.302-.352.101-.117.135-.198.202-.333.067-.135.034-.251-.017-.352-.052-.101-.455-1.1-.623-1.507-.164-.397-.333-.342-.455-.348-.117-.007-.252-.007-.388-.007a.77.77 0 0 0-.559.261c-.193.201-.738.721-.738 1.758s.753 2.032.858 2.172c.105.14 1.48 2.261 3.587 3.167.502.217.893.346 1.2.443.505.161.964.138 1.326.084.403-.061 1.194-.488 1.36-.96.166-.473.166-.88.116-.964-.05-.084-.185-.134-.388-.235" />
        </svg>
      </a>
    </BrowserRouter>

  );
}

export default App;


