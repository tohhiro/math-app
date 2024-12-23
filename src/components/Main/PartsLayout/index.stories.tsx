import React from 'react';
import { PartsLayout } from '.';

export default {
  title: 'Main/PartsLayout',
  component: PartsLayout,
};

export const Default: React.FC = () => {
  const mockData = {
    children: <div>Childrenの要素</div>,
  };

  return <PartsLayout {...mockData} />;
};
