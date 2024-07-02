import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";

type Manager = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
};

const initialManagers: Manager[] = [
  {
    id: 1,
    firstName: "Karim",
    lastName: "El Mansouri",
    email: "karim.elmansouri@redal.ma",
    department: "Finance"
  },
  {
    id: 2,
    firstName: "Amina",
    lastName: "Benjelloun",
    email: "amina.benjelloun@redal.ma",
    department: "Marketing"
  },
  {
    id: 3,
    firstName: "Youssef",
    lastName: "Tahiri",
    email: "youssef.tahiri@redal.ma",
    department: "Operations"
  },
  {
    id: 4,
    firstName: "Leila",
    lastName: "Ziani",
    email: "leila.ziani@redal.ma",
    department: "Human Resources"
  }
];

const ManagerList: React.FC = () => {
  const [managers, setManagers] = useState<Manager[]>(initialManagers);
  const [editingManager, setEditingManager] = useState<Manager | null>(null);

  const handleEdit = (manager: Manager) => {
    setEditingManager(manager);
  };

  const handleDelete = (id: number) => {
    setManagers(managers.filter((manager) => manager.id !== id));
  };

  const handleUpdateManager = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingManager) return;

    setManagers(managers.map((manager) => (manager.id === editingManager.id ? editingManager : manager)));
    setEditingManager(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingManager) return;
    setEditingManager({ ...editingManager, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center my-6 text-gray-800">
        Gestion des managers
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Département
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {managers.map((manager) => (
              <tr key={manager.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {manager.firstName} {manager.lastName}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{manager.email}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{manager.department}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(manager)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(manager.id)}
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

      <Dialog.Root open={!!editingManager} onOpenChange={(open) => !open && setEditingManager(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <Dialog.Title className="text-2xl font-bold mb-4">Modifier le manager</Dialog.Title>
            <form onSubmit={handleUpdateManager}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={editingManager?.firstName || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={editingManager?.lastName || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={editingManager?.email || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                  Département
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={editingManager?.department || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Mettre à jour
                </button>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Annuler
                  </button>
                </Dialog.Close>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default ManagerList;