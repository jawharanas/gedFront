import { Link } from 'react-router-dom';

const Navbar = () => {
    const content = <>

    <div className="">
        <ul>
        
            <li>
           <Link to="/"> HomePage</Link>
            </li>
            
            <li>
           <Link to="/ManagersList"> Managers</Link>
            </li>

            <li>
           <Link to="/EmployeeList"> Employees</Link>
            </li>

            <li>
           <Link to="/"> Documents</Link>
            </li>

              <li>
           <Link to="/"> Dashboards</Link>
            </li>
            </ul>
            </div>
            </>

    return (
        <nav className="fixed w-full bg-red-500 text-white p-4 top-0 left-0 z-50">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <img src="/public/download.png" alt="Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex md:items-center md:justify-end font-normal">
            <ul className="flex gap-8 mr-16 text-white">
              <li><Link to="/" className="text-white hover:text-gray-300 transition duration-200 ease-in-out">HomePage</Link></li>
              <li><Link to="/ManagersList" className="text-white hover:text-gray-300 transition duration-200 ease-in-out">Managers</Link></li>
              <li><Link to="/EmployeeList" className="text-white hover:text-gray-300 transition duration-200 ease-in-out">Employees</Link></li>
              <li><Link to="/documents" className="text-white hover:text-gray-300 transition duration-200 ease-in-out">Documents</Link></li>
              <li><Link to="/dashboards" className="text-white hover:text-gray-300 transition duration-200 ease-in-out">Dashboards</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar