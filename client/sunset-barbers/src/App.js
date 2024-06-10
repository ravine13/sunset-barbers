import './App.css';
// import LoginForm from './LoginForm'; // Import the LoginForm component
import LoginForm from './login/login';
import RegisterForm
 from './components/register/register';

function App() {
  return (
    <div className="App">
      <LoginForm /> {/* Use the LoginForm component */}
    </div>
  );
}

export default App;
