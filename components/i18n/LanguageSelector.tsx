import React from 'react';

const LanguageSelector: React.FC<{
  languages: string[];
  onSelect: (language: string) => void;
}> = ({ languages, onSelect }) => {
  return (
    <div className="language-selector">
      <select onChange={(e) => onSelect(e.target.value)}>
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
