import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive" 



const Logo0 = styled.div`
display: flex;


`
const Logo1 =styled.h1`
font-weight: bold;
`
const Logo2 =styled.small`
padding-top: 17px;
`

const Container = styled.div`
display: flex;
${mobile({flexDirection:"column"})}


`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;


`
const Center = styled.div`
flex: 1;
padding: 20px;

`
const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor:"#fff8f8"})}

`
const Title = styled.h3`
margin-bottom: 30px ;


`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;


`

const Listed = styled.div`
flex: 1;
`

const ListItem = styled.li`
cursor: pointer;
margin-bottom: 10px;

&:hover{
    color: green;
    padding-left: 10px;

}




`

const Description = styled.p`
margin: 20px 0px;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`
const SocialContainer = styled.div`
display: flex;

`
const ContactItem = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;

`

const Payment = styled.img`

margin-top: 10px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
            <Logo0>
                   <Logo1>BEBBA.</Logo1>
                   <Logo2>shop</Logo2>

                   </Logo0>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                      consequat. </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    </SocialContainer>                      


            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>

                    <Listed>
                    <ListItem>Home</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Wishlist</ListItem>
                    </Listed>
                    <Listed>

                    <ListItem>Cart</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Terms</ListItem>
                    </Listed>



                </List>


                
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> Am Lenkert 7 , 54177 Bonn.
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +49 (0) 1520 9434862
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/> mohamedbebba1@gmail.com
                </ContactItem>
                <ContactItem>
                    <Payment src="https://i.ibb.co/R7sTN7q/payment.webp"/> 
                </ContactItem>




            </Right>



        </Container>
    )
}

export default Footer
