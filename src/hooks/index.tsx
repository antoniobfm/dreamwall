/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

interface IAppProvider {
  children: React.ReactNode;
}

// Demo purposes only

const AppProvider: React.FC<IAppProvider> = ({ children }: IAppProvider) => {
  return <>{children}</>;
};

export default AppProvider;
