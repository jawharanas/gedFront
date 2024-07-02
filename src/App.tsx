
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Homepage from './components/Homepage'
import Callback from './components/Callback'
import EmployeeList from './components/EmployeeList'
import ManagersList from './components/ManagersList'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route index element={<Homepage/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/callback' element={<Callback/>}/>
        <Route path='/EmployeeList'element={<EmployeeList/>}/>
        <Route path='/ManagersList'element={<ManagersList/>}/>
        
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
