import React from 'react';

import { 
  Container, 
  ItemMenu, 
  HomeIcon, 
  ArrowDownIcon, 
  CheckCircleIcon, 
  CircleIcon,
  CalendarIcon,
  TodoIcon,
  ChatIcon,
  EmailIcon,
  GridIcon,
  ColorsIcon,
  CardIcon,
  TableIcon,
  ComponentsIcon,
  FileIcon,
  CopyIcon,
  LayoutIcon,
  ArrowRightIcon
} from './styles';

import Logo from '../../Assets/Logo_GranCursos.svg';

function VerticalMenu() {
  return (
    <Container>
        <img src={Logo} alt="logo"/>

        <ItemMenu className="active">
          <div>
            <HomeIcon />
            <h3>Dashboard</h3>
          </div>
          <ArrowDownIcon />
        </ItemMenu>

        <ItemMenu>
          <div>
            <CircleIcon />
            <h3>eCommerce</h3>
          </div>
        </ItemMenu>

        <h2>APPS</h2>
        <ItemMenu>
          <div>
            <EmailIcon />
            <h3>Email</h3>
          </div>
        </ItemMenu>

        <ItemMenu>
          <div>
            <ChatIcon />
            <h3>Chat</h3>
          </div>
        </ItemMenu>

        <ItemMenu>
          <div>
            <TodoIcon />
            <h3>Todo</h3>
          </div>
        </ItemMenu>

        <ItemMenu>
          <div>
            <CalendarIcon />
            <h3>Calendar</h3>
          </div>
        </ItemMenu>

        <h2>UI ELEMENTS</h2>
        <ItemMenu>
          <div>
            <GridIcon />
            <h3>Grid</h3>
          </div>
          <ArrowRightIcon />
        </ItemMenu>

        <ItemMenu>
          <div>
            <ColorsIcon />
            <h3>Colors</h3>
          </div>
        </ItemMenu>

        <ItemMenu>
          <div>
            <CardIcon />
            <h3>Card</h3>
          </div>
          <ArrowRightIcon />
        </ItemMenu>

        <ItemMenu>
          <div>
            <TableIcon />
            <h3>Table</h3>
          </div>
        </ItemMenu>

        <ItemMenu>
          <div>
            <ComponentsIcon />
            <h3>Components</h3>
          </div>
          <ArrowRightIcon />
        </ItemMenu>

        <h2>FORMS</h2>
        <ItemMenu>
          <div>
            <CopyIcon />
            <h3>Form Elements</h3>
          </div>
          <ArrowRightIcon />
        </ItemMenu>

        <ItemMenu>
          <div>
            <LayoutIcon />
            <h3>Form Layouts</h3>
          </div>
        </ItemMenu>
        
        <ItemMenu>
          <div>
            <FileIcon />
            <h3>Form Wizard</h3>
          </div>
        </ItemMenu>

        <ItemMenu>
          <div>
            <CheckCircleIcon />
            <h3>Form Validation</h3>
          </div>
        </ItemMenu>
    </Container>
  );
}

export default VerticalMenu;