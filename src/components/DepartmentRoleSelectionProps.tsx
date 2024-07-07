import React, { useState } from 'react';

interface DepartmentRoleSelectionProps {
  onSelectionComplete: (department: string, role: 'EMPLOYEE' | 'MANAGER', managerCode?: string) => void;
}

const DepartmentRoleSelection: React.FC<DepartmentRoleSelectionProps> = ({ onSelectionComplete }) => {
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState<'EMPLOYEE' | 'MANAGER'>();
  const [managerCode, setManagerCode] = useState<string>('');

  const handleRoleSelection = (selectedRole: 'EMPLOYEE' | 'MANAGER') => {
    setRole(selectedRole);
    if (selectedRole === 'EMPLOYEE') {
      onSelectionComplete(department, 'EMPLOYEE');
    } else {
      // Clear manager code if switching to EMPLOYEE role
      setManagerCode('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (role === 'MANAGER') {
      // Validate manager code here (you can implement your own logic)
      // For simplicity, let's assume it's correct
      onSelectionComplete(department, 'MANAGER', managerCode);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Department and Role Selection</h2>
      <form onSubmit={handleSubmit} className="w-[300px]">
        <div className="mb-4">
          <label htmlFor="department" className="block mb-2">Department:</label>
          <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="w-full p-2 bg-grey-500 text-black rounded-md mb-4 hover:bg-red-100 transition-colors duration-20"
        required
      >
        <option value="" disabled>Select Department</option>
        <option value="INFORMATIQUE">INFORMATIQUE</option>
        <option value="MARKETING">MARKETING</option>
        <option value="FINANCE">FINANCE</option>
        <option value="RH">RH</option>
      </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Role:</label>
          <div className="flex">
            <button
              type="button"
              onClick={() => handleRoleSelection('EMPLOYEE')}
              className={`w-1/2 p-2 mr-2 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 ${role === 'EMPLOYEE' ? 'bg-blue-600' : ''}`}
            >
              Employee
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelection('MANAGER')}
              className={`w-1/2 p-2 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 ${role === 'MANAGER' ? 'bg-blue-600' : ''}`}
            >
              Manager
            </button>
          </div>
        </div>
        {role === 'MANAGER' && (
          <div className="mb-4">
            <label htmlFor="managerCode" className="block mb-2">Manager Code:</label>
            <input
              type="text"
              id="managerCode"
              value={managerCode}
              onChange={(e) => setManagerCode(e.target.value)}
              placeholder="Enter manager code"
              className="w-full p-2 bg-grey-500 text-black rounded-md mb-4 hover:bg-red-100 transition-colors duration-20"
              required
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700"
        >
          Confirm Selection
        </button>
      </form>
    </div>
  );
};

export default DepartmentRoleSelection;