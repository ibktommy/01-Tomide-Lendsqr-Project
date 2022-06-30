import './App.css';
import Login from './pages/Login/Login';
import UserFilter from './pages/UserFilter/UserFilter';
import UsersGenDetails from './pages/UsersGenDetails/UsersGenDetails';

function App() {
  return (
    <>
      <Login />
      <h1 className="top-header">
        Users - General details
      </h1>
      <UsersGenDetails />
      <h1>User - Dashboard</h1>
      <UserFilter />
      {/* <h1 className="top-header">
       Users - Showing Filters
      </h1> 
      <UserFilter /> */}
    </>
  );
}

export default App;
