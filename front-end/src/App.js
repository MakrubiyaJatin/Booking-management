import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Register';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/" element={<BookingForm />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
