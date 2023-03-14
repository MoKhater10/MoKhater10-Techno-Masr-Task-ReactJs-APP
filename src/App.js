import React, { useEffect } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import { Routes , Route, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import { useNavigate } from 'react-router-dom';
import Category from './Components/Categories/category/Category';

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);

  return (
    <div className="App">
          <Routes>
            <Route exact path="/" element={<Form />} />
            {token && <Route path="/Home" element={<Home />} >
              <Route path=':categoryId' element={<Category />} />
            </Route>}
          </Routes>
        </div>
  );
}

export default App;
