import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';

function App() {
const fullname="sabrine";
const bio="Mother";
const profession="student";

const handleName=(x)=>alert(x);
  return (
    <div className="App">

      <Profile fullname={fullname} bio={bio} profession={profession} handleName={handleName}>
        <img src="https://th.bing.com/th/id/OIP.Af8Eaw5NTzB4aTq7cTwwNwHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        
      </Profile>
    </div>
  );
}

export default App;
