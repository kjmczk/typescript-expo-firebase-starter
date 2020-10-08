import React from 'react';

import { AuthUserProvider } from './AuthUserProvider';
import Routes from './Routes';

const Providers: React.FC = () => {
  return (
    <AuthUserProvider>
      <Routes />
    </AuthUserProvider>
  );
};

export default Providers;
