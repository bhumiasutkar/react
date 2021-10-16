import React, { useState } from "react";
import Router, { Link } from 'react-router-dom';
import * as materialIcon from '@material-ui/icons';

import './sidebar.scss';
import { SidebarData } from './SidebarData';


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar)
  }
  return (
    
    <div className={`sidebar ${sidebar ? 'active' : ''}`} id="nav-bar" >
      <nav className="nav">        
              <a href="#" className="nav_logo">
                <span className="nav_logo-name">ERP System</span>
              </a>

              <div className="nav_list">
                    <Link to="#" key="close-icon" onClick={showSidebar} className="nav_link">
                        <span className="nav_icon"><materialIcon.Close/></span>
                        <span className="nav_name">Close</span>
                    </Link>
                {SidebarData.map((val, key) => {
                      return (
                        <Link to={val.link} key={key} className="nav_link">
                          <span className="nav_icon">{ val.icon }</span>
                          <span className="nav_name">{val.title}</span>
                        </Link>
                      );
                    })
                }          
            
              </div>
              <a href="#" className="nav_link">
                  <span className="nav_icon"><materialIcon.ExitToApp/></span>
                  <span className="nav_name">SignOut</span>
              </a>
        </nav>
    </div>
  );
};

export default Sidebar;