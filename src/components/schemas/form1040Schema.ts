import { TaxForm } from '../types/forms';

export const form1040Schema: TaxForm = {
  id: '1040',
  form_name: '1040',
  fields: {
    first_name: { type: 'text', label: 'First Name' },
    last_name: { type: 'text', label: 'Last Name' },
    ssn: { type: 'text', label: 'SSN' },
    filing_status: {
      type: 'select',
      label: 'Filing Status',
      options: ['single', 'married_filing_jointly', 'married_filing_separately', 'head_of_household']
    },
    income: { type: 'number', label: 'Income' },
    standard_deduction: { type: 'checkbox', label: 'Standard Deduction' },
    self_employment_income: { type: 'number', label: 'Self-Employment Income' },
    dividend_income: { type: 'number', label: 'Dividend Income' },
    capital_gains: { type: 'number', label: 'Capital Gains' },
    rental_income: { type: 'number', label: 'Rental Income' },
    mortgage_interest: { type: 'number', label: 'Mortgage Interest' },
    property_taxes: { type: 'number', label: 'Property Taxes' },
    foreign_income: { type: 'number', label: 'Foreign Income' },
    foreign_tax_paid: { type: 'number', label: 'Foreign Tax Paid' },
    tuition_paid: { type: 'number', label: 'Tuition Paid' },
    student_loan_interest: { type: 'number', label: 'Student Loan Interest' },
  }
};