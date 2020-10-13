import React from 'react';

import { Container, Pages, Arrow, ArrowLeftIcon, ArrowRightIcon, Aba } from './styles';

function Pagination() {
  return (
    <Container>
      <Arrow>
        <ArrowLeftIcon />
      </Arrow>
      <Pages>        
        <Aba >1</Aba>
        <Aba >2</Aba>
        <Aba >3</Aba>
        <Aba >4</Aba>
        <Aba >5</Aba>
        <Aba className='active'>6</Aba>
        <Aba >7</Aba>
        <Aba >8</Aba>
        <Aba >9</Aba>
        <Aba >10</Aba>        
      </Pages>
      <Arrow>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
}

export default Pagination;