import React from "react";

interface IBtnAction {
  title: string;
  color: string;
  typeBtn: 'solid' | 'no-solid';
  onClick?: () => void
}

interface IColors {
    orange: { backgroundColor?: string; color: string };
    red: { backgroundColor?: string; color: string };
}

const BtnAction: React.FC<IBtnAction> = ({ title, color, typeBtn, onClick }) => {
  const Colors: Record<string, IColors> = {
    solid: {
      orange: { backgroundColor: '#F3B664', color: '#F3EEEA' },
      red: { backgroundColor: '#EA5455', color: '#F3EEEA' }
    },
    'no-solid': {
      orange: { color: '#F3B664' },
      red: { color: '#EA5455' }
    }
  };

  const colorKey = color as 'orange' | 'red';

  return (
    <button
      className={`bg-transparent h-12 w-44 rounded-xl`}
      type='submit'
      style={{ ...Colors[typeBtn][colorKey], fontFamily: 'Unbound-reguler' }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default BtnAction;
