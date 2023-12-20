import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Use the 'element' prop instead of 'index' */}
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employeeList" element={<EmployeeList />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
