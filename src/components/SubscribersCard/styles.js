import styled from 'styled-components';

import { 
  Star, 
  StarOutline,

} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 100%;
  
  position: sticky;
  top: 130px;
  left: 0;

  > h3 {
    margin-top: 12px;
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: var(--Dark-900);
  }

`;

export const Menu = styled.div`
  background: var(--Light-0);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.170509);
  border-radius: 8px;

  padding: 16px;
`;

export const MultiRange = styled.div`
  margin-bottom: 16px;
  > h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: var(--Dark-900);
    margin-bottom: 8px;
  }
`;

export const Item = styled.label`
  display: flex;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;

    > input {
      margin-right: 8px;
      width: 16px;
      height: 16px;
    }
  }
`;

export const Slider = styled.div`
  border-top: 1px solid var(--Light-300);
  margin-bottom: 16px;

  > input {
    width: 100%;
  }
`;

export const TitleSlider = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

    > h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: var(--Dark-900);
      margin-bottom: 8px;
    }

    > div {
      display: flex;      

      > h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: var(--Dark-900);
      }
    }
`;

export const Category = styled.div`
  border-top: 1px solid var(--Light-300);
  margin-bottom: 16px;

  > h3 {
    margin-top: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: var(--Dark-900);
    margin-bottom: 8px;
  }
`;

export const ItemMenu = styled.label`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  > div {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;

    > input {
      margin-right: 12px;
      width: 15px;
      height: 15px;
    }
  }

  > h3 {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 32px;
  }
`;

export const Brand = styled.div`
  border-top: 1px solid var(--Light-300);
  margin-bottom: 16px;

  > h3 {
    margin-top: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: var(--Dark-900);
    margin-bottom: 8px;
  }
`;

export const Rating = styled.div`
  border-top: 1px solid var(--Light-300);
  > h3 {
    margin-top: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: var(--Dark-900);
    margin-bottom: 8px;
  }
`;

export const ItemRating = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;

  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;

  > div {
    display: flex;
    align-items: center;

    > svg {
      margin-right: 8px;
    }
  }

  > h3 {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
  }
`;

export const Button= styled.button`
  width: 100%;
  height: 56px; 
  margin-top: 24px;
  margin-bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--Red-500);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  > h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: var(--Light-300);
  }
`;

export const StarIcon = styled(Star)`
  width: 20px;
  height: 20px;
  fill: var(--Yellow-500);
`;

export const StarBorderIcon = styled(StarOutline)`
  width: 20px;
  height: 20px;
  fill: var(--Yellow-500);
`;
