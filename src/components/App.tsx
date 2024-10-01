/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState, useEffect } from 'react';
import { FormBuilder } from './FormBuilder';
import { TaxForm } from './TaxForm';
import { Sidebar } from './Sidebar';
import { Notes } from './Notes';
import axios from 'axios';
import { allForms, exampleFormData } from './exampleForms';
import { validateForm } from './utils/formValidation';
import { FormData } from './types/forms';


  const recommendForms = async (formData: any) => {
    debugger;
    try {
      const response = await axios.post('http://localhost:8000/recommend', { form_data: formData });
      return response.data;
    } catch (error) {
      console.error('Error recommending forms:', error);
      throw error;
    }
  };

  const HomePage: React.FC = () => {
    const [formData, setFormData] = useState<Record<string, FormData>>(exampleFormData);
    const [selectedForm, setSelectedForm] = useState<string>(allForms[0].id);
    const [notes, setNotes] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Initialize formData with empty objects for each form


    const handleSubmit = async (data: FormData) => {
      setIsLoading(true);
      setFormData(prevData => ({
        ...prevData,
        [selectedForm]: data
      }));

      try {
        const result = await recommendForms({
          form_name: selectedForm,
          fields: data
        });

        const recommendationNotes = `
  Recommendations:
  ${result.recommendations.join('\n')}

  Filled Forms:
  ${JSON.stringify(result.filled_forms, null, 2)}

  Audit Suggestions:
  ${result.audit_suggestions.join('\n')}
        `;

        setNotes(recommendationNotes);
      } catch (error) {
        console.error('Error submitting form:', error);
        setNotes('An error occurred while processing your form. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    const handleFormSelect = (formId: string) => {
      setSelectedForm(formId);
    };

    const handleNotesChange = (newNotes: string) => {
      setNotes(newNotes);
    };

    const selectedFormData = allForms.find(form => form.id === selectedForm);

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">TaxSage: AI-Powered Tax Form Assistant and Auditor</h1>
        <div className="flex">
          <Sidebar forms={allForms} selectedForm={selectedForm} onSelectForm={handleFormSelect} />
          <div className="flex-grow px-4">
          {selectedFormData && ( <FormBuilder
              key={selectedForm}
              form={selectedFormData}
              onSubmit={handleSubmit}
              initialValues={formData[selectedForm] || {}}
            />) }
             {isLoading && <p className="mt-4">Processing your form...</p>}
          </div>
          <Notes notes={notes} onNotesChange={handleNotesChange} />
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Generated Tax Forms</h2>
          <TaxForm data={formData} />
        </div>
      </div>
    );
  };

  export default HomePage;