import React, { useState } from "react";
import Sidebar from "./SideBar";
import Historique from "./Historique";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState<"Historique des documents" | "Utilisateurs">("Historique des documents");

  return (
    <>
      <div className="flex justify-start w-full h-full">
        <Sidebar
          tabs={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === "Historique des documents" ? (
         <Historique/>
        ) : (
          <div className="flex flex-col p-4">
            <h1>Utilisateurs</h1>
            <p>Utilisateur 1</p>
            <p>Utilisateur 2</p>
            <p>Utilisateur 3</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Homepage;