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
export default function MainRouter() {
  return (
    <Router>
      <div>
        <TopBar>
            <Routes>
              {/* <Route path="/" element={ <UploadCSV />}/> */}
              <Route path ="/" element ={<Employee/>} /> 
            </Routes>
        </TopBar>
      </div>
      
    </Router>
  );
}

/**
 *  <Route path="/" element={  }  />
 */