"use client"

import React from 'react';

interface SidebarProps {
  forms: Array<{ id: string; form_name: string }>;
  selectedForm: string;
  onSelectForm: (formId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ forms, selectedForm, onSelectForm }) => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">Tax Forms</h2>
      <ul>
        {forms.map((form) => (
          <li
            key={form.id}
            className={`cursor-pointer p-2 ${selectedForm === form.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => onSelectForm(form.id)}
          >
            {form.form_name}
          </li>
        ))}
      </ul>
    </div>
  );
};
