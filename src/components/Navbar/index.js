import React from 'react';

import { 
  Container, 
  Header,
  TopSid,
  
  Icons,
  CheckIcon,
  ChatIcon,
  EmailIcon,
  CalendarIcon,
  StarIcon,
  Profile,
  BellIcon,
  SearchIcon,
  Perfil,

  Content,
  HomeIcon,
  ArrowRightIcon,
  Bottom,
  SettingIcon,   
} from './styles';

import Oval from '../../Assets/Oval.svg';

function Navbar() {
  return (
    <Container>
      <Header>
        <TopSid>
          <Icons>
            <CheckIcon />
            <ChatIcon />
            <EmailIcon />
            <CalendarIcon />
            <StarIcon />
          </Icons>
          <Profile>
            <div>
              <h3>English</h3>
              <BellIcon />
              <SearchIcon />              
            </div>
            <Perfil>
              <div>
                <h3>John Doe</h3>
                <p>Available</p>
              </div>
              <img src={Oval} alt="oval"/>
            </Perfil>
          </Profile>
        </TopSid>
        <Content>
          <div>
            <h3>Card Actions</h3>
            <HomeIcon />
            <ArrowRightIcon />
            <p>eCommerce</p>
            <ArrowRightIcon />
            <p>Eletronics</p>
          </div>
          <Bottom>
            <SettingIcon />
          </Bottom>
        </Content>
      </Header>
    </Container>
  );
}

export default Navbar;