import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../Aside/Aside';
import Navbar from '../Navbar/Navbar';
import "./home.css";


function Home() {
  return (
    
      <div>
        <section>
          <Navbar/>
        </section>

        <section className='father'>
            <Aside/>
            <Outlet/>
        </section>
      </div>
      
  );
}
export default Home;