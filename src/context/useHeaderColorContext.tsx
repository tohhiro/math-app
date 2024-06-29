import React, { useState, createContext, useContext } from 'react';

type HeaderColorProps = 'stop' | 'running';

type HeaderColorInitProps = {
  headerColor: HeaderColorProps;
  setHeaderColor: React.Dispatch<React.SetStateAction<HeaderColorProps>>;
};

const HeaderColorContext = createContext<HeaderColorInitProps | null>(null);

export const HeaderColorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [headerColor, setHeaderColor] = useState<HeaderColorProps>('stop');

  return (
    <HeaderColorContext.Provider value={{ headerColor, setHeaderColor }}>
      {children}
    </HeaderColorContext.Provider>
  );
};

type HeaderColorContextType = {
  get: () => HeaderColorProps | null;
  set: (color: HeaderColorProps) => void;
};
export const useHeaderColor = (): HeaderColorContextType => {
  const context = useContext(HeaderColorContext);
  return {
    get: () => context?.headerColor || null,
    set: (color: HeaderColorProps) => context?.setHeaderColor(color),
  };
};
