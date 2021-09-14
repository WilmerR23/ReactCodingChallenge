import React from 'react';
import AppProvider from './state/Provider';
import { Layout } from './components/Layout';

const App: React.FC<{}> = () => {
  return (
      <AppProvider>
          <Layout/>
      </AppProvider>
  );
}

export default App;
