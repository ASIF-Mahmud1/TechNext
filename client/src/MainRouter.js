import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function MainRouter() {
  return (
    <Router>
      <div>
        <Authenticate>
            <Routes>
              {/* <Route path="/" element={ <TabSection />}/> */}
             
            </Routes>
        </Authenticate>
      </div>
      
    </Router>
  );
}

/**
 *  <Route path="/" element={  }  />
 */