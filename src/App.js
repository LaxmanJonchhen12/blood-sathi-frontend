import "./App.css";
import { Route, Routes } from "react-router-dom";

// pages for routes
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import LoginAdmin from "./pages/home/components/LoginAdmin";
import RegisterPatient  from "./pages/home/components/RegisterPatient";
import RegisterDonor from "./pages/home/components/RegisterDonor";
import LoginPatient  from "./pages/home/components/LoginPatient";
import LoginDonor from "./pages/home/components/LoginDonor";
import Patient from "./pages/patient/Patient";
import Donor from "./pages/donor/Donor";
import Admin from "./pages/admin/Admin";
import NavPanel from "./components/NavPannel";
import BloodRequest from "./components/BloodRequest";
import BloodPannel from "./pages/admin/components/BloodPannel";
import DonationRequest from "./pages/donor/components/DonationRequest";
import DonationPannel from "./pages/admin/components/DonationPannel";
import UpdateBloodStock from "./pages/admin/components/UpdateBloodStock";
import BloodrequestHistory from "./pages/admin/components/BloodrequestHistory";
import DonationHistory from "./pages/donor/components/DonationHistory";
import BloodRequestDonor from "./pages/donor/components/BloodRequestDonor";
import DonorBloodRequestHistory from "./pages/donor/components/DonorBloodRequestHistory";
import BloodRequestHistory from "./pages/patient/components/BloodRequestHistory";
import LogoutPage from "./components/LogoutPage";
// importing context
import PatientState from "./context/PatientState";
import DonorState from "./context/DonorState";


function App() {
  return (
    <div className="App">
      <PatientState>
        <DonorState>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/adminlogin" element={<LoginAdmin/>} />
         <Route path="/donorlogin" element={<LoginDonor/>} />
         <Route path="/patientlogin" element={<LoginPatient/>} />
         <Route path="/registerpatient" element={<RegisterPatient />} />
         <Route path="/registerdonor" element={<RegisterDonor />} />
         <Route path="/patient" element={<Patient />} />
         <Route path="/donor" element={<Donor />} />
         <Route path="/admin" element={<Admin />} />
         <Route path="/bloodrequest" element={<BloodRequest />} />
         <Route path="/bloodpannel" element={<BloodPannel />} />
         <Route path="/donationrequest" element={<DonationRequest />} />
         <Route path="/donationpannel" element={<DonationPannel />} />
         <Route path="/updatebloodstock" element={<UpdateBloodStock />} />
         <Route path="/bloodrequesthistory" element={<BloodrequestHistory />} />
         <Route path="/donationhistory" element={<DonationHistory />} />
         <Route path="/bloodrequestdonor" element={<BloodRequestDonor />} />
         <Route path="/donorbloodrequesthistory" element={<DonorBloodRequestHistory />} />
         <Route path="/getPatientBloodRequestHistory" element={<BloodRequestHistory />} />
         <Route path="/logout" element={<LogoutPage />} />
       </Routes>
       </DonorState>
       </PatientState>
    </div>
  );
}

export default App;
