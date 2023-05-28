import { Routes, Route } from "react-router-dom";
import './App.css';
import Profile from './componets/Profile/Profile';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar.js';
import Home from './componets/Home/Home';
import DialogContener from './componets/Dialog/DialogContener';
import PeopleContener from './componets/People/PeopleContener';
import ProfileConteiner from "./componets/Profile/ProfileConteiner";
// import { ThisUser } from "./componets/ThisUser/thisUser";

function App(props) {
console.log(props.store);


  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/messiges' element={<DialogContener  />} />
            <Route path='/profile'  element={<ProfileConteiner  />} />
            <Route path='/profile/:id'  element={<ProfileConteiner  />} />
            {/* <Route path='/profile/:id'  element={<ThisUser  />} /> */}
            <Route path='/users'  element={<PeopleContener />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
