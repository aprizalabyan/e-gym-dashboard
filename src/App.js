import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar';
import Dashboard from './components/pages/Dashboard';
import Member from './components/pages/Member';
import Schedule from './components/pages/Schedule';
import Trainer from './components/pages/Trainer';
import Payment from './components/pages/Payment';
import Setting from './components/pages/Setting';
import Help from './components/pages/Help';
import Logout from './components/pages/Logout';

function App() {
  return (
    <Router>
      <div className="rowContainer">
        <Sidebar/>
        <div className="body">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/member" element={<Member />}/>
            <Route path="/schedule" element={<Schedule />}/>
            <Route path="/trainer" element={<Trainer />}/>
            <Route path="/payment" element={<Payment />}/>
            <Route path="/setting" element={<Setting />}/>
            <Route path="/help" element={<Help />}/>
            <Route path="/logout" element={<Logout />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
