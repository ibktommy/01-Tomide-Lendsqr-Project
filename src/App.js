import './App.css';
import Login from './pages/Login/Login';
import UsersGenDetails from './pages/Login/UsersGenDetails/UsersGenDetails';

function App() {
  return (
    <>
      <Login />
      <h1 className="header">
        Users - General details
      </h1>
      <UsersGenDetails />
    </>
  );
}

export default App;
