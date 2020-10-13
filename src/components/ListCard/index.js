import React from 'react';

import Products from '../../data';

import { 
  Container, 
  Header,
  Top,
  BtnDefault, 
  ArrowDownIcon, 
  BtnGrid, 
  GridIcon,  
  BtnMenu,
  MenuIcon,
  Input,
  SearchIcon,

  List,
  Card,
  Title,
  ShopingCart,
  TopSide,
  Note,
  StarIcon,
  Freship,
  ShoppingIcon,
  BtnList,
  BtnWish,  
  HeartIcon,
  BtnAddCart,
  CartIcon,
  BtnAdd
} from './styles';

function ListCard() {
  console.log(Products);

  return (
    <Container>
      <Header>
          <Top>
            <h3>7,618 results found in 5ms</h3>
            <div>
              <BtnDefault>
                <span>Default</span>
                <ArrowDownIcon />
              </BtnDefault>
              <BtnGrid>
                <GridIcon />
              </BtnGrid>
              <BtnMenu>
                <MenuIcon />
              </BtnMenu>
            </div>
          </Top>
          <Input>
            <input placeholder="Search hear" />
            <SearchIcon />
          </Input>   
      </Header>

      <List>        
          {Products.map(data => (
            <Card key={data.id}>
              <img src={data.cover} alt="beats" />
               <div>
                <Title>
                  <h1>{data.title}</h1>
                </Title>
                <div>
                  <span>By</span>
                  <h4>{data.brand}</h4>
                </div>
                <p>{data.description}</p>
              </div>
      
              <ShopingCart>
                <TopSide>
                  <Note>
                    <h1>{data.stars}</h1>
                    <StarIcon />
                  </Note>
                </TopSide>
                  <Freship>
                    <h1>{data.value}</h1>
                    <div>
                      <ShoppingIcon />
                      <h3>Free Shipping</h3>
                    </div>
                  </Freship>
                <BtnList>
                  <BtnWish>
                    <HeartIcon />
                    <h1>WISHLIST</h1>
                  </BtnWish>
                </BtnList>
                <BtnAddCart>
                  <BtnAdd>
                    <CartIcon />
                    <h1>ADD TO CART</h1>
                  </BtnAdd>
                </BtnAddCart>
              </ShopingCart>

            </Card>
          ))}         
      </List>
      
    </Container>
  );
}

export default ListCard;