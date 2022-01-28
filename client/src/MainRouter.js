import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TopBar from './home/container/TopBar'
import UploadCSV from './employee/component/UploadCSV'
export default function MainRouter() {
  return (
    <Router>
      <div>
        <TopBar>
            <Routes>
              <Route path="/" element={ <UploadCSV />}/>
             
            </Routes>
        </TopBar>
      </div>
      
    </Router>
  );
}

/**
 *  <Route path="/" element={  }  />
 */