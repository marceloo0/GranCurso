import styled, { css } from 'styled-components';

import {
  HomeAlt,
  Circle,
  ArrowIosDownwardOutline,

  ArrowIosForwardOutline,
  EmailOutline,
  ChatBubbleOutline,
  CheckmarkSquareOutline,
  Calendar,

  Layout3,
  DropletOutline,
  CreditCard,
  GridAlt,
  Archive,

  Copy,
  LayoutLeft,
  File,
  CheckmarkCircleOutline,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  
  position: sticky;
  top: 0;
  left: 0;

  padding: 0 20px 0 20px;

  background: var(--Light-0);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.170509);

  > h2 {
    margin-top: 8px;
    margin-left: 8px;
    /* margin-bottom: 8px; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 36px;
  }
`;

export const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
    margin-left: 8px;

    > h3 {
      margin-left: 8px;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 40px;
    }
  }

  &.active {
    background: var(--Light-300);
    border-radius: 4px;
  }

  &:hover {
    background: var(--Light-300);
    border-radius: 4px;
  }
`;

const IconCSS = css`
  width: 20px;
  height: 20px;
`;

export const HomeIcon = styled(HomeAlt)`
  ${IconCSS}
`;

export const ArrowDownIcon = styled(ArrowIosDownwardOutline)`
  ${IconCSS}
  margin-right: 8px;
`;

export const CheckCircleIcon = styled(CheckmarkCircleOutline)`
  ${IconCSS}
`;

export const CircleIcon = styled(Circle)`
  width: 14px;
  height: 14px;
  margin-left: 4px;
`;

export const CalendarIcon = styled(Calendar)`
  ${IconCSS}
`;

export const TodoIcon = styled(CheckmarkSquareOutline)`
  ${IconCSS}
`;

export const ChatIcon = styled(ChatBubbleOutline)`
  ${IconCSS}
`;

export const EmailIcon = styled(EmailOutline)`
  ${IconCSS}
`;

export const GridIcon = styled(Layout3)`
  ${IconCSS}
`;

export const ColorsIcon = styled(DropletOutline)`
  ${IconCSS}
`;

export const CardIcon = styled(CreditCard)`
  ${IconCSS}
`;

export const TableIcon = styled(GridAlt)`
  ${IconCSS}
`;

export const ComponentsIcon = styled(Archive)`
  ${IconCSS}
`;

export const FileIcon = styled(File)`
  ${IconCSS}
`;

export const CopyIcon = styled(Copy)`
  ${IconCSS}
`;

export const LayoutIcon = styled(LayoutLeft)`
  ${IconCSS}
`;

export const ArrowRightIcon = styled(ArrowIosForwardOutline)`
  ${IconCSS}
  margin-right: 8px;
`;