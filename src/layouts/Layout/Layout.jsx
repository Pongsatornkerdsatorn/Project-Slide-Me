import React from 'react';



import './Layout.css';

import 'bootstrap/dist/css/bootstrap.css';

import { Outlet } from 'react-router-dom';
import CustomNavbar from '../Navbar/Navbar';


function Layout() {
    return ( 
        <div>
          <CustomNavbar />
            <main>
            <Outlet />  
            </main>
          

        </div>  
     );
}

export default Layout;