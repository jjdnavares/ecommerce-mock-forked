import React from 'react';
import { CollectionGrid } from '../components/Collections/CollectionGrid';

export const Collections: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Collections</h1>
      <CollectionGrid />
    </div>
  );
};