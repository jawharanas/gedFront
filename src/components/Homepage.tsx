import React, { useState } from "react";
import Sidebar from "./SideBar";
import Historique from "./Historique";
import HistoriqueUtilisateurs from "./HistoriqueUtilisateurs";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState<"Historique des documents" | "Utilisateurs">("Historique des documents");

  return (
    <>
      <div className="flex justify-start w-full h-full">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === "Historique des documents" ? (
         <Historique/>
        ) : (
          <HistoriqueUtilisateurs/>
        )}
      </div>
    </>
  );
};

export default Homepage;