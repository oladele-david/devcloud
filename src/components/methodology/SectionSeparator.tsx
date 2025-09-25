import React from 'react';

export const SectionSeparator: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className || ''}>
    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
  </div>
);

export default SectionSeparator;


