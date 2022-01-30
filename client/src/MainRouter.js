import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TopBar from './home/container/TopBar'
import UploadCSV from './employee/component/UploadCSV'
import Employee from './employee/component/Employee'
import SendEmail from './employee/component/SendEmail'
import SearchEmployee from './employee/component/SearchEmployee'
import Dashboard from "./employee/container/Dashborad";
import AddNewEmployee from './employee/component/AddNewEmployee'
import Form from './employee/component/Form'

export default function MainRouter() {
  return (
    <Router>
      <div>
        <TopBar>
            <Routes>
              <Route path="/" element={  <Dashboard/>}  />
              <Route path="/byCsv" element={ <UploadCSV />}/>
              <Route path ="/employee" element ={<Employee/>} /> 
              <Route path="/addEmployee" element={<AddNewEmployee/>  }  />
              <Route path="/form" element={<Form/>  }  />
              <Route path="/sendEmail" element={<SendEmail/>  }  />
              <Route path="/searchEmployee" element={ <SearchEmployee/> }  />

            </Routes>
        </TopBar>
      </div>
      
    </Router>
  );
}

/**
 *  <Route path="/" element={  }  />
 */