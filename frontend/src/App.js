import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './screens/register';
import Login from './screens/login';
import ApplyLeave from './screens/ApplyLeave';
import ApproveLeave from './screens/ApproveLeave';
import ApprovedLeave from './screens/ApprovedLeave';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Login}></Route>
        <Route path="/Register" component={Register}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/ApplyLeave" component={ApplyLeave}></Route>
        <Route path="/ApproveLeave" component={ApproveLeave}></Route>
        <Route path="/ApprovedLeave" component={ApprovedLeave}></Route>


      </Router>
    </div>
  );
}

export default App;
