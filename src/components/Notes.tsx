"use client"

import React from 'react';
import { Textarea } from './ui/Textarea';

interface NotesProps {
  notes: string;
  onNotesChange: (notes: string) => void;
}

export const Notes: React.FC<NotesProps> = ({ notes, onNotesChange }) => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">Notes</h2>
      <Textarea
        value={notes}
        onChange={(e) => onNotesChange(e.target.value)}
        className="w-full h-64"
        placeholder="Enter your notes here..."
      />
    </div>
  );
};