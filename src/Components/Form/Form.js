import React, { useState } from 'react';
import "./form.css";
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../Auth';

 localStorage.setItem('user', 'Mostafa');
 localStorage.setItem('pass', 12345);

function Form() {
  let [user, setUser] = useState('');
  let [pass, setPass] = useState('');
  const navigate = useNavigate();


  const handleChangeUser = (e) => {
    setUser(e.target.value);
  }

  const handleChangePass = (e) => {
    setPass(e.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const token = getToken(user, pass)
    if (token) {
      localStorage.setItem('token', token);
      navigate('/Home/category1');
    }
    else {
      alert("Wrong Login");
    }
  };

  
  return (
    <div >
        <form className="login"  onSubmit={handleSubmit} >
            <h2>Welcome , User!</h2>
            <p>Please log in</p>
            <input type="text" placeholder="User Name"  onChange={handleChangeUser}/>
            <input type="password" placeholder="Password"  onChange={handleChangePass} />
        <button className='submit' type="submit">Login</button>
        </form>
    </div>
  );
}
export default Form;