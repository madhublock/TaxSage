/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from 'react';
import { Form, Field } from 'react-final-form';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Checkbox  } from './ui/Checkbox';
import { TaxForm, FormData, FormField } from './types/forms';
interface FormBuilderProps {
    form: TaxForm;
    onSubmit: (data: FormData) => void;
    initialValues?: FormData;
  }

  export const FormBuilder: React.FC<FormBuilderProps> = ({ form, onSubmit, initialValues = {} }) => {
    const renderField = (name: string, field: FormField) => {
      switch (field.type) {
        case 'number':
          return (
            <Field name={name} key={name}>
              {({ input, meta }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                  <Input {...input} type="number" className="mt-1 block w-full" />
                  {meta.error && meta.touched && <span className="text-red-500">{meta.error}</span>}
                </div>
              )}
            </Field>
          );
        case 'select':
          return (
            <Field name={name} key={name}>
              {({ input, meta }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                  <Select {...input} className="mt-1 block w-full">
                    <option value="">Select an option</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                  {meta.error && meta.touched && <span className="text-red-500">{meta.error}</span>}
                </div>
              )}
            </Field>
          );
        case 'checkbox':
          return (
            <Field name={name} key={name} type="checkbox">
              {({ input, meta }) => (
                <div className="mb-4">
                  <label className="flex items-center">
                    <Checkbox {...input} />
                    <span className="ml-2">{field.label}</span>
                  </label>
                  {meta.error && meta.touched && <span className="text-red-500">{meta.error}</span>}
                </div>
              )}
            </Field>
          );
        default: // 'text' type
          return (
            <Field name={name} key={name}>
              {({ input, meta }) => (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                  <Input {...input} type="text" className="mt-1 block w-full" />
                  {meta.error && meta.touched && <span className="text-red-500">{meta.error}</span>}
                </div>
              )}
            </Field>
          );
      }
    };

    return (
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">{form.form_name}</h2>
            {Object.entries(form.fields).map(([fieldName, fieldConfig]) =>
              renderField(fieldName, fieldConfig)
            )}
            <Button type="submit" disabled={submitting || pristine}>
              Save Form
            </Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      />
    );
  };