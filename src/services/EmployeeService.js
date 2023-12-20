import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:5452/api/create";
const EMPLOYEE_API_BASE_URL_GET = "http://localhost:5452/api/get";
const EMPLOYEE_API_BASE_URL_DELETE = "http://localhost:5452/api/delete";
const EMPLOYEE_API_BASE_URL_PUT = "http://localhost:5452/api/update";

class EmployeeService{
   saveEmployee(employee){
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
   }

   getEmployees(){
      return axios.get(EMPLOYEE_API_BASE_URL_GET);
   }
   deleteEmployee(id){
      return axios.delete(EMPLOYEE_API_BASE_URL_DELETE + "/" + id);
   }

   getEmployeeById(id){
      return axios.get(EMPLOYEE_API_BASE_URL_GET + "/" + id);
   }

   updateEmployee(employee,id){
      return axios.put(EMPLOYEE_API_BASE_URL_PUT + "/" + id, employee);
   }
}

export default new EmployeeService();