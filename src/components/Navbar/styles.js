import styled, { css } from 'styled-components';

import {
  EmailOutline,
  ChatBubbleOutline,
  CheckmarkSquareOutline,
  Calendar,
  HomeAlt,
  ArrowheadRightOutline,
  Bell,
  Settings2Outline,
  StarOutline,
  Search
} from '../../styles/Icons';

export const Container = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  left: 0;
  height: 130px;
  background: var(--Light-0);

  display: flex;
  flex-direction: column; 
`;

export const Header = styled.div`
  margin-top: 16px;
  margin-right: 16px;
`;

export const TopSid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;

  background: var(--Light-0);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
`;

export const Icons = styled.div`
  display: flex;

  > svg {
    margin-left: 24px;
    color: var(--Mid-700);
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;

    > h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: var(--Dark-900);
    }

    > svg {
      margin-left: 24px;
      color: var(--Mid-700);
    }
  }

`;
export const Perfil = styled.div`
  display: flex;
  margin-left: 24px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    margin-right: 12px;

    > h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: var(--Dark-900);
    }

    > p {
      font-style: normal;
      font-weight: 300;
      font-size: 11px;
      line-height: 13px;
      color: var(--Mid-700);
    }
  }

  > img {
    margin-right: 12px;
    width: 34px;
    height: 34px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  > div {
    display: flex;
    align-items: center;

    > h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: var(--Dark-900);
    }

    > p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: var(--Mid-700);
    }
  }
`;

export const Bottom = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;

  background: var(--Blue-600);
  border-radius: 50%;
`;

const IconCSS = css`
  width: 20px;
  height: 20px;
`;

export const CheckIcon = styled(CheckmarkSquareOutline)`
  ${IconCSS}
`;

export const ChatIcon = styled(ChatBubbleOutline)`
  ${IconCSS}
`;

export const EmailIcon = styled(EmailOutline)`
  ${IconCSS}
`;

export const CalendarIcon = styled(Calendar)`
  ${IconCSS}
`;

export const StarIcon = styled(StarOutline)`
  ${IconCSS}
`;

export const BellIcon = styled(Bell)`
  ${IconCSS}
`;

export const SearchIcon = styled(Search)`
  ${IconCSS}
`;

export const HomeIcon = styled(HomeAlt)`
  width: 13px;
  height: 15px;
  margin-left: 8px;

`;

export const ArrowRightIcon = styled(ArrowheadRightOutline)`
  width: 10px;
  height: 10px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const SettingIcon = styled(Settings2Outline)`
  width: 22px;
  height: 22px;
  fill: var(--Light-200);
`;
