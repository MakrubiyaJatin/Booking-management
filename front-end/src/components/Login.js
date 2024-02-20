import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { login } from '../redux/actions/authAction';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('')
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state);

  useEffect(() =>{
    if(userRegister?.auth?.auth?.data)
    {
        navigate('/booking');
    }
  },[userRegister?.auth])

  const handleLogin = (e) => {
    e.preventDefault();
    if(email == '' || password == '')
    {
        setError('Please enter email and password')
        return;
    }
    login(email, password);

  };

  return (
    <div class="container">
        <div class="content">
            <img src="https://res.cloudinary.com/debbsefe/image/upload/f_auto,c_fill,dpr_auto,e_grayscale/image_fz7n7w.webp" alt="header-image" class="cld-responsive" />
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <Link to={'/register'}> Don't have an account?</Link>
            </form>
        </div>
    </div>
  );
};

export default connect(null, { login })(Login);
