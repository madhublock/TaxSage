import { TaxForm, FormData } from '../types/forms';

export function validateForm(form: TaxForm, data: FormData): boolean {
  for (const [fieldName, fieldConfig] of Object.entries(form.fields)) {
    if (fieldName in data) {
      const value = data[fieldName];
      switch (fieldConfig.type) {
        case 'text':
          if (typeof value !== 'string') return false;
          break;
        case 'number':
          if (typeof value !== 'number') return false;
          break;
        case 'select':
          if (typeof value !== 'string' || !fieldConfig.options?.includes(value)) return false;
          break;
        case 'checkbox':
          if (typeof value !== 'boolean') return false;
          break;
      }
    }
  }
  return true;
}