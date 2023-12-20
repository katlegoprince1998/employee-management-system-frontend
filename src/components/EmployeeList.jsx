import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeList = () => {
    const navigate = useNavigate();
const editEmployee = (e, id) =>{
    e.preventDefault();
    navigate(`/updateEmployee/${id}`)
}



 const [loading, setLoading] = useState(true);
 const [employees, setEmployees] = useState(null);

 useEffect(() => {
   const fetchData = async() => {
    setLoading(true);
    try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
        
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
   };
   fetchData();
 }, []);
 
 const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
        if(employees){
            setEmployees((prevElement) => {
                return prevElement.filter((employee) => employee.id !== id);
            });
        }
    })
 }

  return (
    <div className="container m-2 my-8 w-full">
      <div className="h-12">
        <button 
         onClick={() => navigate("/addEmployee")}
        className="rounded bg-blue-700 text-white px-6 py-2 font-semibold">
          
          Add Employee
        </button>
      </div>
      <div className="flex items-center justify-center shadow border-b w-full">
        <table className="w-full m-2">
            <thead className="bg-blue-700">
               
                <tr>
                    <th className="text-left font-small text-white uppercase  py-3 px-6">First Name</th>
                    <th className="text-left font-small text-white uppercase  py-3 px-6">Last Name</th>
                    <th className="text-left font-small text-white uppercase  py-3 px-6">Email</th>
                    <th className="text-left font-small text-white uppercase  py-3 px-6">Phone</th>
                    <th className="text-left font-small text-white uppercase  py-3 px-6">Actions</th>
                </tr>
            </thead>
            {!loading && (
            <tbody className="bg-white">
                 {employees.map((employee) => (
                <tr key={employee.id}>
                    <td className="text-left px- py-4 whitespace-nowrap text-sm text-gray-500 font-serif">{employee.name}</td>
                    <td className="text-left px- py-4 whitespace-nowrap text-sm text-gray-500 font-serif">{employee.lastname}</td>
                    <td className="text-left px- py-4 whitespace-nowrap text-sm text-gray-500 font-serif">{employee.email}</td>
                    <td className="text-left px- py-4 whitespace-nowrap text-sm text-gray-500 font-serif">{employee.phone}</td>
                    <td className="text-left px- py-4 whitespace-nowrap text-sm text-gray-500 font-serif">
                        <a onClick={(e, id) => editEmployee(e,employee.id)} className="text-indigo-600 hover:text-indigo-800 px-4" >Update</a>
                        <a onClick={(e, id) => deleteEmployee(e, employee.id)} className="text-red-600 hover:text-red-800" >Delete</a>
                    </td>
                </tr>
                ))}
            </tbody>
            )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
