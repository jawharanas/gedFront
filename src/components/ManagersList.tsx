import React, { useEffect, useState } from 'react';
import { listManagers } from '../Services/ManagerServices';
import Navbar from './Navbar';

const ManagersList = () => {
  
  const [managers,setManagers] = useState<ManagerDTO[]>([])
  useEffect(()=> {
   listManagers().then((response)=> {
     setManagers(response.data);
   
  }).catch(error => {
     console.error(error);
 
  })
},[])
return (
  <>
  <Navbar/>
  <div className='container mx-auto px-4'>
    <h2 className='text-center text-xl font-bold mb-4'>Managers List</h2>
    <table className='table-auto w-full'>
      <thead>
        <tr>
          <th className='px-4 py-2 border border-red-200'>Manager ID</th>
          <th className='px-4 py-2 border border-red-200'>Manager First Name</th>
          <th className='px-4 py-2 border border-red-200'>Manager Last Name</th>
          <th className='px-4 py-2 border border-red-200'>Manager Email</th>
        </tr>
      </thead>
      <tbody>
      {managers.map((Manager) => (
            <tr key={Manager.id} className='hover:bg-gray-100'>
              <td className='border border-red-600'>{Manager.id}</td>
              <td className='border border-red-600'>{Manager.firstName}</td>
              <td className='border border-red-600'>{Manager.lastName}</td>
              <td className='border border-red-600'>{Manager.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};




export default ManagersList;
