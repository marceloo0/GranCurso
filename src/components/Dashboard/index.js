import React from 'react';

import Navbar from '../Navbar';
import SubscribersCard from '../SubscribersCard';
import ListCard from '../ListCard';
import Pagination from '../Pagination';

import { Container, Content } from './styles';

function Dashboard() {
  return (
    <Container>
      <Navbar />
      <Content>
        <SubscribersCard />
        <ListCard />
      </Content>
      <Pagination />
    </Container>
  );
}

export default Dashboard;