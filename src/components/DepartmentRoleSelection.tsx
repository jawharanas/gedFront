import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DepartmentRoleSelectionProps {
  onSelectionComplete: (
    department: string,
    role: "EMPLOYE" | "MANAGER",
    managerCode?: string
  ) => void;
}

const DepartmentRoleSelection: React.FC<DepartmentRoleSelectionProps> = ({
  onSelectionComplete,
}) => {
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState<"EMPLOYE" | "MANAGER">();
  const [managerCode, setManagerCode] = useState<string>("");
  const navigate = useNavigate();

  const handleRoleSelection = (selectedRole: "EMPLOYE" | "MANAGER") => {
    setRole(selectedRole);
    if (selectedRole === "EMPLOYE") {
      onSelectionComplete(department, "EMPLOYE");
    } else {
      setManagerCode("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (role === "MANAGER") {
      onSelectionComplete(department, "MANAGER", managerCode);
    }
    navigate("/");

  };

  return (
    <div className="flex w-100 justify-center m-[6rem]">
      <div className="flex flex-col items-center  justify-center p-8 rounded-lg shadow-lg  ">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">
          Sélection du Département et du Rôle
        </h2>
        <form onSubmit={handleSubmit} className="w-[350px] ">
          <div className="mb-6">
            <label
              htmlFor="department"
              className="block mb-2 text-gray-700 font-semibold"
            >
              Département:
            </label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full p-3 bg-white text-gray-800 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
              required
            >
              <option value="" disabled>
                Sélectionnez un département
              </option>
              <option value="INFORMATIQUE">Informatique</option>
              <option value="MARKETING">Marketing</option>
              <option value="FINANCE">Finance</option>
              <option value="RH">Ressources Humaines</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-semibold">
              Rôle:
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => handleRoleSelection("EMPLOYE")}
                className={`flex-1 p-3 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  role === "EMPLOYE"
                    ? "bg-blue-600 text-white ring-blue-500"
                    : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
                }`}
              >
                Employé
              </button>
              <button
                type="button"
                onClick={() => handleRoleSelection("MANAGER")}
                className={`flex-1 p-3 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  role === "MANAGER"
                    ? "bg-blue-600 text-white ring-blue-500"
                    : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
                }`}
              >
                Manager
              </button>
            </div>
          </div>
          {role === "MANAGER" && (
            <div className="mb-6">
              <label
                htmlFor="managerCode"
                className="block mb-2 text-gray-700 font-semibold"
              >
                Code Manager:
              </label>
              <input
                type="text"
                id="managerCode"
                value={managerCode}
                onChange={(e) => setManagerCode(e.target.value)}
                placeholder="Entrez le code manager"
                className="w-full p-3 bg-white text-gray-800 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800"
          >
            Confirmer la Sélection
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepartmentRoleSelection;
