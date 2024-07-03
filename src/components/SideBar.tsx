import React from "react";
import { FaHistory, FaUsers } from "react-icons/fa";
import { TbLogs } from "react-icons/tb";

interface SidebarProps {
  activeTab: "Historique des documents" | "Utilisateurs";
  setActiveTab: React.Dispatch<React.SetStateAction<"Historique des documents" | "Utilisateurs">>;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-[400px] bg-gray-800 h-screen text-white">
      <div className="p-4">
        <h1 className="text-2xl text-center font-bold mb-6 flex items-center justify-center gap-2"><TbLogs /> <span>
          Historique</span></h1>
        <nav>
          <button
            className={`w-full flex items-center py-3 px-4 rounded-lg transition-colors duration-200 ${
              activeTab === "Historique des documents"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("Historique des documents")}
          >
            <FaHistory className="mr-3" />
            <span>Historique des documents</span>
          </button>
          <button
            className={`w-full flex items-center py-3 px-4 rounded-lg mt-2 transition-colors duration-200 ${
              activeTab === "Utilisateurs"
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("Utilisateurs")}
          >
            <FaUsers className="mr-3" />
            <span>Historique des utilisateurs</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;