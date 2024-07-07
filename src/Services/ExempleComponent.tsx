import React from 'react';
import axiosInstance from './axiosConifg';
import { getDocumentById } from './DocumentService';

const ExampleComponent: React.FC = () => {
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/v1/auth');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchDocument = async (id: number) => {
    try {
      const document = await getDocumentById(id);
      console.log('Document:', document);
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={() => fetchDocument(1)}>Fetch Document 1</button>
    </div>
  );
};

export default ExampleComponent;