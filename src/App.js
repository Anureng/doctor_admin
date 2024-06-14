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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<DashboardMain />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/doctor' element={<Doctor />}>
            <Route path='/doctor/list' element={<DoctorList />} />
            <Route path='/doctor/profile' element={<DoctorProfile />} />
          </Route>
          <Route path='/patient' element={<Patient />}>
            <Route path='/patient/list' element={<PatientList />} />
            <Route path='/patient/profile' element={<PatientProfile />} />
          </Route>
          <Route path='/review' element={<Review />} />
          <Route path='/details' element={<PersonalDetails />} />╬
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
