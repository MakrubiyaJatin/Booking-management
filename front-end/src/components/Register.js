import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/actions/authAction';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Registration = ({ register }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('')
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state);

  useEffect(()=>{
    if(userRegister?.auth?.user?.data)
    {
        navigate('/login');
    }
  },[userRegister])

  const handleRegister = async (e) => {
      e.preventDefault();
      if(firstname == '' || lastname == '' || email == '' || password == '')
      {
          setError('Please enter firstname, lastname, email and password')
          return;
      }
         register({email, password, lastname, firstname});
};

  return (
    <div class="container">
        <div class="content">
            <img src="https://res.cloudinary.com/debbsefe/image/upload/f_auto,c_fill,dpr_auto,e_grayscale/image_fz7n7w.webp" alt="header-image" class="cld-responsive" />
            {error && <p>{error}</p>}
            <form onSubmit={handleRegister}>
            <input
                type="text"
                placeholder="FirstName"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            />
            <input
                type="text"
                placeholder="LastName"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br></br>
            <button type="submit">Register</button>
            <Link to={'/login'}> Already have an account? </Link>
            </form>
        </div>
    </div>
  );
};

export default connect(null, { register })(Registration);