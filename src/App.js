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




function App() {
  const { currentUser } = useContext(UserContext)
  
  return <Routes>
           <Route path='/' element={<Navigation/>}>
           {currentUser && <>  <Route path='home' element={<Home/>}/>
              <Route index path='/' element={<SchdeuleList/>}/>
              <Route path='create' element={<CreateSchedule/>}/> </> }
              <Route path='auth' element={<AuthComponent/>}/> 
          </Route>
    </Routes>
}

export default App;
