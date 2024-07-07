import React from 'react';
import { FaFile, FaFileWord, FaFilePdf, FaFileExcel } from 'react-icons/fa';

interface Document {
  id: string;
  nom: string;
  type: 'pdf' | 'word' | 'excel' | 'autre';
  dateUpload: string;
  taille: string;
  utilisateur: string;
}

const mockDocuments: Document[] = [
  { id: '1', nom: 'Rapport Mensuel', type: 'pdf', dateUpload: '2024-03-01 14:30', taille: '2.5 MB', utilisateur: 'Fatima Benali' },
  { id: '2', nom: 'Présentation Client', type: 'word', dateUpload: '2024-02-28 09:15', taille: '5.1 MB', utilisateur: 'Hassan El Fassi' },
  { id: '3', nom: 'Analyse Financière', type: 'excel', dateUpload: '2024-02-27 16:45', taille: '1.8 MB', utilisateur: 'Anas Benmina' },
  { id: '4', nom: 'Contrat de Service', type: 'pdf', dateUpload: '2024-02-26 11:20', taille: '3.2 MB', utilisateur: 'Fatima Benali' },
];

const getIconForDocType = (type: string) => {
  switch (type) {
    case 'pdf':
      return <FaFilePdf className="text-red-500" />;
    case 'word':
      return <FaFileWord className="text-blue-500" />;
    case 'excel':
      return <FaFileExcel className="text-green-500" />;
    default:
      return <FaFile className="text-gray-500" />;
  }
};

const Historique: React.FC = () => {
  return (
    <div className="bg-white w-full shadow-lg rounded-lg p-6 mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Historique des Documents Récents</h2>
      <div className="space-y-4">
        {mockDocuments.map((doc) => (
          <div key={doc.id} className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition duration-150">
            <div className="flex-shrink-0 mr-4">
              {getIconForDocType(doc.type)}
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium text-gray-800">{doc.nom}</h3>
              <p className="text-sm text-gray-600">
                Ajouté le {new Date(doc.dateUpload).toLocaleString('fr-FR')} par {doc.utilisateur}
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {doc.taille}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Historique;