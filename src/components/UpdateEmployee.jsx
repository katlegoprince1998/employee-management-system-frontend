import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: id,
    name: '',
    lastname: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const updateEmployee = async (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id).then((response) => {
        navigate("/employeeList");
    })
    .catch((error) => {
        console.log(error);
    })
  };




  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
    <div className="px-8 py-8">
      <div className="font-thin text-2xl tracking-wide">
        <h1>Update Employee</h1>
      </div>
      <div className="items-center  justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm" htmlFor="name">
          Firstname:
        </label>
        <input
          value={employee.name}
          onChange={(e) => handleChange(e)}
          name="name"
          className="mt-2 px-2 py-2 border w-46 rounded-sm"
          type="text"
        ></input>
      </div>
      <div className="items-center  justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm" htmlFor="name">
          Lastname:
        </label>
        <input
          value={employee.lastname}
          onChange={(e) => handleChange(e)}
          name="lastname"
          className="mt-2 px-2 py-2 border w-46 rounded-sm"
          type="text"
        ></input>
      </div>
      <div className="items-center  justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm" htmlFor="name">
          Email:
        </label>
        <input
          value={employee.email}
          onChange={(e) => handleChange(e)}
          name="email"
          className="mt-2 px-2 py-2 border w-46 rounded-sm"
          type="email"
        ></input>
      </div>
      <div className="items-center  justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm" htmlFor="name">
          Phone:
        </label>
        <input
          value={employee.phone}
          onChange={(e) => handleChange(e)}
          name="phone"
          className="mt-2 px-2 py-2 border w-46 rounded-sm"
          type="text"
        ></input>
      </div>
      <div className="items-center space-x-24  justify-center h-14 w-full my-4">
        <button
         onClick={updateEmployee}
          name="create"
          className="rounded text-white font-semibold bg-blue-700 py-2 px-2 mt-2 hover:bg-blue-900"
        >
          Update
        </button>
        
      </div>
    </div>
  </div>
  );
};

export default UpdateEmployee;
