import { TaxForm, FormData } from './types/forms';
import { form1040Schema } from './schemas/form1040Schema';

export const form1040: TaxForm = {
  ...form1040Schema,
  id: '1040_basic'
};

export const form1040SelfEmployed: TaxForm = {
  ...form1040Schema,
  id: '1040_self_employed'
};

export const form1040Investments: TaxForm = {
  ...form1040Schema,
  id: '1040_investments'
};

export const form1040Rental: TaxForm = {
  ...form1040Schema,
  id: '1040_rental'
};

export const form1040Foreign: TaxForm = {
  ...form1040Schema,
  id: '1040_foreign'
};

export const form1040Education: TaxForm = {
  ...form1040Schema,
  id: '1040_education'
};

export const allForms: TaxForm[] = [
  form1040,
  form1040SelfEmployed,
//   form1040Investments,
//   form1040Rental,
//   form1040Foreign,
//   form1040Education
];

// Example form data (you can use this for testing)
export const exampleFormData: Record<string, FormData> = {
  '1040_basic': {
    first_name: "John",
    last_name: "Doe",
    ssn: "123-45-6789",
    filing_status: "single",
    income: 75000,
    standard_deduction: true
  },
  '1040_self_employed': {
    first_name: "Jane",
    last_name: "Smith",
    ssn: "987-65-4321",
    filing_status: "married_filing_jointly",
    income: 120000,
    self_employment_income: 50000,
    standard_deduction: false
  },
  // ... add more example data for other forms as needed
};