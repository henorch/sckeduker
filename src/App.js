import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import SchdeuleList from './routes/schedule-list/schedule-list.component';
import Home from './routes/home/home.component';
import CreateSchedule from './routes/create-schedule/create-schedule.component';
import AuthComponent from './routes/auth/auth_component';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/user.context';
import { getUserLocation } from './utils/firebase/firebase';




function App() {
  const { currentUser } = useContext(UserContext)
  getUserLocation()
  return <Routes>
              <Route path='/' element={<Navigation/>}>
               <Route path='home' element={<Home/>}/>
              <Route path='schedule' element={<SchdeuleList/>}/>
              <Route path='create' element={<CreateSchedule/>}/> 
              <Route index element={<AuthComponent/>}/> 
          </Route>
    </Routes>
}

export default App;
