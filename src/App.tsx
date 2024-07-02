
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Homepage from './components/Homepage'
import Callback from './components/Callback'
import EmployeeList from './components/EmployeeList'
import ManagersList from './components/ManagersList'
import Layout from './components/Layout'
import Documents from './components/Documents'

function App() {

  return (
   <>
     <BrowserRouter>
    
       <Routes>
         
       <Route path="/" element={<Layout />}>
       <Route index element={<Homepage />} />
         <Route  path='/callback' element={<Callback/>}/>
         <Route path='/EmployeeList'element={<EmployeeList/>}/>
         <Route path='/ManagersList'element={<ManagersList/>}/>
         <Route path='/documents'element={<Documents/>}/>
      </Route>
         <Route  path='/login' element={<Login/>}/>
         
       
       </Routes>
     </BrowserRouter>
   </>
  )
}

export default App
