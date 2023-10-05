import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components';
import TrackLocation from './components/location/Location';
import Navbar from './components/navbar/Navbar';
import Employee from './components/employee_details/employee';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/trackLocation" element={<TrackLocation/>}/>
      <Route path= "/employeeDetails" element={<Employee/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
