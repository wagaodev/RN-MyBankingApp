import React from 'react';

import { Providers } from './configs/Providers';
import { Routes } from './routes';

export default function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}
