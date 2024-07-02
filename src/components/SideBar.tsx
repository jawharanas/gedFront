import React from "react";

interface SidebarProps {
  tabs: "Historique des documents" | "Utilisateurs";
  setActiveTab: React.Dispatch<React.SetStateAction<"Historique des documents" | "Utilisateurs">>;
}

const Sidebar: React.FC<SidebarProps> = ({ tabs, setActiveTab }) => {
  return (
    <div className="w-[400px] bg-gray-100 h-screen">
      <div className="flex flex-col p-4">
        <button
          className={`py-2 px-4 mb-2 rounded-md ${
            tabs === "Historique des documents"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("Historique des documents")}
        >
          Historique des documents
        </button>
        <button
          className={`py-2 px-4 rounded-md ${
            tabs === "Utilisateurs"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("Utilisateurs")}
        >
          Utilisateurs
        </button>
      </div>
    </div>
  );
};

export default Sidebar;