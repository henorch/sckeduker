import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import SchdeuleList from './routes/schedule-list/schedule-list.component';
import Home from './routes/home/home.component';
import CreateSchedule from './routes/create-schedule/create-schedule.component';
import SignInComponent from './routes/auth/signIn.comp[onent';


function App() {
  return <Routes>
    <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/schedule' element={<SchdeuleList/>}/>
        <Route path='/create' element={<CreateSchedule/>}/>
        <Route path='/auth' element={<SignInComponent/>}/>
    </Route>
    </Routes>
}

export default App;
