import React from "react";
import { FaUser, FaBuilding } from "react-icons/fa";
import { User } from "../constants/Types";
import users from "../db/users.json";

const getDepartmentColor = (department: string) => {
  switch (department.toLowerCase()) {
    case "marketing":
      return "bg-blue-100 text-blue-800";
    case "finance":
      return "bg-green-100 text-green-800";
    case "it":
      return "bg-purple-100 text-purple-800";
    case "ressources humaines":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const HistoriqueUtilisateurs: React.FC = () => {
  const utilisateurs: User[] = users;
  return (
    <div className="bg-white shadow-lg w-full rounded-lg p-6 mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Historique des Utilisateurs
      </h2>
      <div className="space-y-4">
        {utilisateurs.map((user) => (
          <div
            key={user.id}
            className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition duration-150"
          >
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUser className="text-blue-500 text-xl" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium text-gray-800">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div className="flex items-center">
              <span
                className={`text-sm px-2 py-1 rounded-full flex items-center ${getDepartmentColor(
                  user.department
                )}`}
              >
                <FaBuilding className="mr-1" />
                {user.department}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoriqueUtilisateurs;
