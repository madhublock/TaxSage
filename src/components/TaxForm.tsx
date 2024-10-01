/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from 'react';

interface TaxFormProps {
  data: any;
}

export const TaxForm: React.FC<TaxFormProps> = ({ data }) => {
  const renderFormData = (formData: any) => {
    return Object.entries(formData).map(([key, value]) => (
      <p key={key} className="mb-2">
        <span className="font-medium">{key}:</span> {value}
      </p>
    ));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      {Object.keys(data).length > 0 ? (
        Object.entries(data).map(([formName, formData]) => (
          <div key={formName} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{formName}</h3>
            {renderFormData(formData)}
          </div>
        ))
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};