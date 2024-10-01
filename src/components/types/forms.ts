export interface FormField {
    type: 'text' | 'number' | 'select' | 'checkbox';
    label: string;
    options?: string[]; // For select fields
  }

  export interface TaxForm {
    id: string;
    form_name: string;
    fields: Record<string, FormField>;
  }

  export interface FormData {
    [key: string]: string | number | boolean;
  }