import Dashboard from "./Component/Dashboard.jsx";
import Cards from "./Component/Cards.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login.jsx";
import Recruitment from "./Component/Recruitment.jsx"
import Employeelist from "./Component/Employeelist.jsx";
import AddEmployee from "./Component/AddEmployee.jsx";
import Attendence from "./Component/Attendence.jsx"
import Notice from "./Component/Notice.jsx"
import Holiday from "./Component/Holiday.jsx";
import Leave from "./Component/Leave.jsx";
import Setting from "./Component/Setting.jsx";
import Edit from "./Component/Editemployee.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>

            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard" element={<Cards />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/dashboard/recruitment" element={<Recruitment/>}></Route>
              <Route path="/dashboard/employee" element={< Employeelist/>}></Route>
              <Route path="/dashboard/attendence" element={<Attendence/>}></Route>
               <Route path="/dashboard/notice" element={<Notice/>}></Route>
               <Route path="/dashboard/holiday" element={<Holiday/>}></Route>
               <Route path="/dashboard/leave" element={<Leave/>}></Route>
               <Route path="/dashboard/setting" element={<Setting/>}></Route>
            </Route>
            <Route path="/employee/AddEmployee" element={<AddEmployee/>}></Route>
            <Route path="/employee/Edit/:emp_id" element={<Edit/>}></Route>
         </Routes> 
        
      </BrowserRouter>
    </>
  );
}

export default App;
