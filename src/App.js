import { Routes, Route, HashRouter } from 'react-router-dom'
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

const App = () => {
  return (
    <HashRouter>
      <div className="rowContainer">
        <Sidebar/>
        <div className="body">
          <Topbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />}/>
            <Route exact path="/member" element={<Member />}/>
            <Route exact path="/schedule" element={<Schedule />}/>
            <Route exact path="/trainer" element={<Trainer />}/>
            <Route exact path="/payment" element={<Payment />}/>
            <Route exact path="/setting" element={<Setting />}/>
            <Route exact path="/help" element={<Help />}/>
            <Route exact path="/logout" element={<Logout />}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
