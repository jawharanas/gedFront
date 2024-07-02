import React, { useState, useEffect } from "react";
import { FaSearch, FaUpload, FaFile, FaTrash } from "react-icons/fa";

type Document = {
  id: number;
  name: string;
  uploadDate: string;
  user  : string;
  size: string;
};

const initialDocuments: Document[] = [
  {
    id: 1,
    name: "Rapport financier 2023.pdf",
    uploadDate: "2023-12-15",
    user: "Karim El Mansouri",
    size: "2.5 MB",
  },
  {
    id: 2,
    name: "Présentation marketing Q4.pptx",
    uploadDate: "2023-11-30",
    user: "Amina Benjelloun",
    size: "5.1 MB",
  },
  {
    id: 3,
    name: "Contrat client XYZ.docx",
    uploadDate: "2023-12-05",
    user: "Youssef Tahiri",
    size: "1.2 MB",
  },
  {
    id: 4,
    name: "Plan stratégique 2024.xlsx",
    uploadDate: "2023-12-10",
    user: "Leila Ziani",
    size: "3.7 MB",
  },
];

const DocumentsList: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDocuments, setFilteredDocuments] =
    useState<Document[]>(documents);

  useEffect(() => {
    const results = documents.filter((doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDocuments(results);
  }, [searchTerm, documents]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id: number) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newDocument: Document = {
        id: documents.length + 1,
        name: file.name,
        uploadDate: new Date().toISOString().split("T")[0],
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        user: "Anas Benmina",
      };
      setDocuments([...documents, newDocument]);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center my-6 text-gray-800">
        Gestion des documents
      </h1>

      <div className="mb-6 flex flex-col items-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Rechercher un document..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <div className="mt-4">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
          />
         
        </div>
      </div>
     <div className="flex  justify-end">
         <label
               htmlFor="file-upload"
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-4 px-4 rounded inline-flex items-center cursor-pointer"
             >
               <FaUpload className="mr-2" />
               Télécharger un document
             </label>
     </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom du document
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date de téléchargement
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Utilisateur
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Taille
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredDocuments.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FaFile className="mr-2 text-gray-500" />
                    <span className="text-sm font-medium text-gray-900">
                      {doc.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{doc.uploadDate}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{doc.user}</div>
                </td>
             
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{doc.size}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentsList;
