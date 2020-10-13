import styled from 'styled-components';

import { ArrowIosBackOutline, ArrowIosForwardOutline } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;

  height: 60px;

  margin-bottom: 16px;
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;

  background: var(--Light-400);
  border-radius: 25px;
`;
export const Aba = styled.div`
  color: var(--Dark-900);
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 50%;
  transition: background-color .3s;
  cursor: pointer;

  &.active {
    background-color: var(--Blue-600);
    color: var(--Light-0);
    
    width: 40px;
    height: 40px;
  }
`;

export const Arrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background: var(--Light-400);
  border-radius: 50%;
`;

export const ArrowLeftIcon = styled(ArrowIosBackOutline)`
  width: 20px;
  height: 20px;
`;
export const ArrowRightIcon = styled(ArrowIosForwardOutline)`
  width: 20px;
  height: 20px;
`;

