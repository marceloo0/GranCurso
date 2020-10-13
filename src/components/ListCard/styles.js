import styled, { css } from 'styled-components';

import { 
  ArrowIosDownwardOutline, 
  Layout3, 
  Menu,
  Search,
  HeartFill, 
  ShoppingCart, 
  ShoppingBagOutline,
  StarOutline
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  margin-left: 16px;  
`;

// Iniciando estilização do header
export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 130px;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 150px;
  background: var(--Light-0);

  padding: 8px 16px 8px 0;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 50px;
    
    > h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: var(--Mid-700);
    }

    > div {
      display: flex;
    }
`;

export const BtnDefault = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 135px;
  height: 40px;
  margin-right: 12px;
  padding: 12px;

  background: var(--Light-0);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
`;

export const BtnGrid = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;
  margin-right: 12px;

  background: var(--Light-0);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
`;
export const BtnMenu= styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;

  background: var(--Light-0);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
`;

export const Input= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 60px;
  margin-top: 8px;
  margin-bottom: 16px;
  
  background: var(--Light-0);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  > input {
    padding: 24px;
    flex: 1;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 26px;
    color: var(--Mid-700);
  }

  > svg {
    margin-right: 24px;
  }
`;
// Finalizando header

// Iniciando Lista de produtos
export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 8px 0;
`;

// Iniciando personalização do card
export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  margin-bottom: 24px;

  background: var(--Light-0);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  > img {
    margin-left: 12px;
    margin-top: 16px;
    width: 210px;
    height: 213px;
  }

  > div {
    margin: 12px;

    > div {
      display: flex;
      align-items: center;

      > span {
        margin-right: 4px;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        color: var(--Mid-500);
      }

      > h4 {
        color: var(--Dark-500);
      }
    }

      > p {
        margin-top: 24px;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 23px;
        color: var(--Mid-700);
      }

  }
`;

export const Title = styled.div`
  margin-top: 32px;

  > h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: var(--Dark-900);
  }
`;

export const ShopingCart = styled.div`
  border-left: 1px solid var(--Light-300);

  width: 330px;
  display: grid;
  grid-template-areas: 'TopSide'
    'Freship'
    'BtnWish'
    'BtnAd' ;
  grid-gap: 5px;
  padding: 5px;

`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0 8px;
`;

export const Note = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px;
  width: 60px;
  height: 30px;

  border-radius: 4px;
  background: var(--Purple-500);

  > h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--Light-200);
  }

  > svg {
    fill: var(--Yellow-500);
  }
`;

export const Freship = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: var(--Mid-700);
  }

  > div {
    display: flex;
    align-items: center;

    > h3 {
      margin-left: 4px;
      margin-top: 4px;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: var(--Mid-700);
    }

    > svg {
      margin-top: 4px;
      border: var(--Mid-700);
    }
  }
`;

export const BtnList = styled.div`
  padding: 8px;
`;

export const BtnWish = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  width: 100%;
  border-radius: 8px;
  background: var(--Green-500);
  border: 1px;
  cursor: pointer;  

  &:hover {
    > svg {
      fill: var(--Red-500);
    }
  }

  > h1 {
    margin-left: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--Light-0);
  }

  > svg {
    color: var(--Mid-700);
  }
`;

export const BtnAddCart = styled.div`
  padding: 8px;
`;

export const BtnAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  width: 100%;
  border-radius: 8px;
  background: var(--Blue-600);
  border: 1px;
  cursor: pointer;

  > h1 {
    margin-left: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--Light-0);
  }

  > svg {
    color: var(--Light-100);
  }
`;

const IconCSS = css`
  width: 20px;
  height: 20px;
`;

export const GridIcon  = styled(Layout3)`
  ${IconCSS}
`;
export const SearchIcon= styled(Search)`
  ${IconCSS}
`;
export const ArrowDownIcon = styled(ArrowIosDownwardOutline)`
  ${IconCSS}
`;
export const MenuIcon= styled(Menu)`
  ${IconCSS}
`;
export const HeartIcon = styled(HeartFill)`
  ${IconCSS}
`;
export const CartIcon = styled(ShoppingBagOutline)`
  ${IconCSS}
`;
export const ShoppingIcon = styled(ShoppingCart)`
  ${IconCSS}
`;

export const StarIcon = styled(StarOutline)`
  ${IconCSS}
`;