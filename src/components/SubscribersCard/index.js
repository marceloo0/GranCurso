import React from 'react';

import { 
  Container,
  Menu,
  Button, 
  MultiRange,
  Slider,
  Item,
  Category,
  ItemMenu,
  Brand,
  Rating,
  TitleSlider,
  ItemRating,
  StarIcon,
  StarBorderIcon,
} from './styles';

function SubscribersCard() {
  return (
    <Container>
      <h3>Filters</h3>

      <Menu>
        <MultiRange>
          <h3>Multi Range</h3>

          <Item>
            <div>
              <input type="radio" name="radio" />$10
            </div>            
          </Item>
          <Item>
            <div>
              <input type="radio" name="radio" />$10 - $100
            </div>            
          </Item>
          <Item>
            <div>
              <input type="radio" name="radio" />$100 - $500
            </div>            
          </Item>
          <Item>
            <div>
              <input type="radio" name="radio" />$500
            </div>            
          </Item>
          <Item>
            <div>
              <input type="radio" name="radio" defaultChecked="checked" />All
            </div>            
          </Item>
        </MultiRange>
        <Slider>
          <TitleSlider>
            <h3>Slider</h3>
            <div>
              <h3>199</h3>
              <h3>-</h3>
              <h3>4098</h3>
            </div>
          </TitleSlider>
          <input type="range" min="0" max="100" step="1" defaultValue="70" />
        </Slider>
        <Category>
          <h3>Category</h3>
          <ItemMenu>
            <div>
              <input type="checkbox" />Cell Phones
            </div>
            <h3>1920</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Computers & Tablets
            </div>
            <h3>1820</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Cell Phone Accessories
            </div>
            <h3>462</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Appliances
            </div>
            <h3>6556</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox"/>
              <span />Audio
            </div>
            <h3>120</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />iPhone Accessories
            </div>
            <h3>353</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Cameras & Camcorders
            </div>
            <h3>45</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />iPhone Cases & Clips
            </div>
            <h3>456</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />TV & Home Theater
            </div>
            <h3>55</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Small Kitchen Appliances
            </div>
            <h3>10</h3>
          </ItemMenu>
        </Category>
        <Brand>
          <h3>Brand</h3>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Insigni
            </div>
            <h3>220</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Samsung
            </div>
            <h3>120</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Apple
            </div>
            <h3>320</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />HP
            </div>
            <h3>32</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox"/>
              <span />Sony
            </div>
            <h3>520</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Metra
            </div>
            <h3>55</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Dyne
            </div>
            <h3>120</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />LG
            </div>
            <h3>98</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Canon
            </div>
            <h3>99</h3>
          </ItemMenu>
          <ItemMenu>
            <div>
              <input type="checkbox" />
              <span />Speck
            </div>
            <h3>575</h3>
          </ItemMenu>
        </Brand>
        <Rating>
          <h3>Rating</h3>
          <ItemRating>
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <span> & Up </span>
            </div>            
            <h3>8500</h3>
          </ItemRating>
          <ItemRating>
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
              <span> & Up </span>
            </div>            
            <h3>3250</h3>
          </ItemRating>
          <ItemRating>
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <span> & Up </span>
            </div>            
            <h3>1120</h3>
          </ItemRating>
        </Rating>
      </Menu>

      <Button>
        <h1>CLEAR ALL FILTERS</h1>
      </Button>
        
    </Container>
  );
}

export default SubscribersCard;