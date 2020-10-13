import React from 'react';

import VerticalMenu from '../VerticalMenu';
import Dashboard from '../Dashboard';

import { Container } from './styles';

function Layout() {
  return (
    <Container>
      <VerticalMenu />
      <Dashboard />
    </Container>
  );
}

export default Layout;