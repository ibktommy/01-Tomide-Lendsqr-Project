import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login/Login';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import UserFilter from './pages/UserFilter/UserFilter';
import UsersGenDetails from './pages/UsersGenDetails/UsersGenDetails';

function App() {
  // Prevent Form Submit 
  const preventSubmit = () => {
    window.addEventListener('submit', function (e) {
      e.preventDefault()
    })
  }

  preventSubmit()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='users-general-details' element={<UsersGenDetails />} />
        <Route path='users-dashboard' element={<UserDashboard />} />
        <Route path='users-filter' element={<UserFilter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
