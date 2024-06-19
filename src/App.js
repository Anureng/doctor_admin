import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardMain from './pages/DashboardMain';
import Appointment from "./pages/Appointment";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import Review from "./pages/Review";
import PersonalDetails from "./pages/PersonalDetails";
import DoctorList from "./component/DoctorList";
import DoctorProfile from "./component/DoctorProfile";
import PatientList from "./component/PatientList";
import PatientProfile from "./component/PatientProfile";
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import DoctorDetail from "./component/DoctorDetail"
import { useAuth } from './AuthContext';


function App() {
  const {isLoggedIn } = useAuth();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
          isLoggedIn ?<> <Route path='/' element={<DashboardMain />} />
          <Route path='/dashboard' element={<DashboardMain />} />
          <Route path='/appointment' element={<Appointment />} />
          
            <Route path='/doctor/list' element={<DoctorList />} />
            <Route path='/doctor/profile' element={<DoctorProfile />} />
            <Route path='/doctor/profile/:id' element={<DoctorDetail />} />
          
            <Route path='/patient/list' element={<PatientList />} />
            <Route path='/patient/profile' element={<PatientProfile />} />
          <Route path='/review' element={<Review />} />
          <Route path='/details' element={<PersonalDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route /></>:<><Route path='/' element={<LoginPage />} />
          <Route path='/dashboard' element={<LoginPage />} />
          <Route path='/appointment' element={<Appointment />} />
          
            <Route path='/doctor/list' element={<DoctorList />} />
            <Route path='/doctor/profile' element={<DoctorProfile />} />
            <Route path='/doctor/profile/:id' element={<DoctorDetail />} />
          
            <Route path='/patient/list' element={<PatientList />} />
            <Route path='/patient/profile' element={<PatientProfile />} />
          <Route path='/review' element={<Review />} />
          <Route path='/details' element={<PersonalDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route />
          </>
}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
