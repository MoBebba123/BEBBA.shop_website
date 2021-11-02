import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive" 



const Container = styled.div`
height: 60px;
${mobile({height: "50px"})}

`;


const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({padding: "10px 0"})}



`;
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.div`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}


`
const SearchContainer = styled.div`
border: 1px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
${mobile({ marginLeft:"2px"})}

`
const Input = styled.input`
border: none;
${mobile({width: "50px"})}


`

const Center = styled.div`
flex: 1;
text-align: center;

`
const Logo0 = styled.div`
display: flex;
justify-content: center;
align-items: center;
${mobile({fontSize: "10px"})}

`
const Logo1 =styled.h1`
font-weight: bold;
`
const Logo2 =styled.small`
padding-top: 12px;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:"2",justifyContent: "center"})}

`
const MenuItems = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft:"10px"})}

`


const Navbar = () => {
    return (
        <Container>
           <Wrapper> 
               <Left>
                  <Language>EN</Language> 
                  <SearchContainer>
                  <Input placeholder="Search"/>
                      <Search  style={{color:"gray", fontSize:16}}/>
                      
                  </SearchContainer>
               </Left>
               <Center>
                   <Logo0>
                   <Logo1>BEBBA.</Logo1>
                   <Logo2>shop</Logo2>

                   </Logo0>


               </Center>
               <Right>
                   <MenuItems>REEGISTER</MenuItems>
                   <MenuItems>SIGN IN</MenuItems>
                   <MenuItems> 
                   <Badge badgeContent={1} color="primary">
                      <ShoppingCartOutlined/>
                        </Badge>
                   </MenuItems>

               </Right>
             </Wrapper>
        </Container>
    )
}

export default Navbar
