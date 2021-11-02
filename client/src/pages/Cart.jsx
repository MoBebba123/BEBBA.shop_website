import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import {mobile} from "../responsive" 

const Container = styled.div`


`
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props)=>props.type === "filled" && "none"};
background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
color: ${(props)=>props.type === "filled" && "white"};

`
const TopTexts = styled.div`

${mobile({ display:"none"})};

`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px ;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection:"column"})};


`
const Info = styled.div`
flex: 3;

`
const Product = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
margin-top: 20px;
`
const ProductDetail = styled.div`

flex: 2;
display: flex;
`



const Detail = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;

`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
border-color: black;
`
const ProductSize = styled.span`

`

const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
`
const ProductAmount = styled.div`
font-style: 24px;
margin: 5px;


`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
margin-top: 20px;

`


const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
    
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
display: flex;
margin: 30px 0;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.p``
const Button = styled.button`
background: black;
width: 180px;
	color: white;
	padding: 8px 30px ;
	margin: 20px 0;
     font-family: sans-serif;
     border: none;
     cursor: pointer;
    
`
const Image = styled.image`
`

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>

                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>


                       <TopButton>CONTINUE SHOPPING</TopButton>
                       <TopTexts>
                           <TopText>Shopping Bag(2)</TopText>
                           
                           <TopText>Your Wishlist(0)</TopText>

                           </TopTexts>   
                       <TopButton type="filled">CHECKOUT NOW</TopButton>     
  
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                              <ProductDetail>

                           <  img  src="https://i.ibb.co/gm7TJ2y/1165670311-6-1-1.webp"  style={{width:"180px", height:"240px"}} />
 
                               <Detail>
                                <ProductName><b>Product:</b> Sweatshirt</ProductName>
                                <ProductId><b>ID:</b> 9951159842</ProductId>
                                <ProductColor style={{width:"20px", height:"20px", backgroundColor:"#d78145" }}></ProductColor>
                                <ProductSize><b>Size:</b> XL</ProductSize>

                               </Detail>
                               </ProductDetail> 
                             <PriceDetail>
                                 <ProductAmountContainer>
                                    <Add/>    
                                    <ProductAmount>2</ProductAmount>                                
                                    <Remove/>

                                  </ProductAmountContainer>
                                  <ProductPrice>$30</ProductPrice>                                

                               </PriceDetail> 

                           </Product>
                           <Product>
                              <ProductDetail>

                           <  img  src="https://i.ibb.co/fp3JvYK/9878234330-6-2-1.jpg"  style={{width:"180px", height:"240px"}} />
 

                               <Detail>
                                <ProductName><b>Product:</b> Dress for Women</ProductName>
                                <ProductId><b>ID:</b> 5621159842</ProductId>
                                <ProductColor style={{width:"20px", height:"20px", backgroundColor:"#af6b34" }}></ProductColor>
                                <ProductSize><b>Size:</b> L</ProductSize>

                               </Detail>
                               </ProductDetail> 
                             <PriceDetail>
                                 <ProductAmountContainer>
                                    <Add/>    
                                    <ProductAmount>1</ProductAmount>                                
                                    <Remove/>

                                  </ProductAmountContainer>
                                  <ProductPrice>$50</ProductPrice>                                

                               </PriceDetail> 

                           </Product>

                           <Product>
                              <ProductDetail>

                                <img src="https://i.ibb.co/JjTkDHf/2156810040-6-2-1.webp"  style={{width:"180px", height:"240px"}}/>

                               <Detail>
                                <ProductName><b>Product:</b> Winter Boots</ProductName>
                                <ProductId><b>ID:</b> 9951159842</ProductId>
                                <ProductColor style={{width:"20px", height:"20px", backgroundColor:"black" }}></ProductColor>
                                <ProductSize><b>Size:</b> 41</ProductSize>

                               </Detail>
                               </ProductDetail> 
                             <PriceDetail>
                                 <ProductAmountContainer>
                                    <Add/>    
                                    <ProductAmount>1</ProductAmount>                                
                                    <Remove/>

                                  </ProductAmountContainer>
                                  <ProductPrice>$70</ProductPrice>                                

                               </PriceDetail> 

                           </Product>


                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal:</SummaryItemText>
                                <SummaryItemPrice> $180.00</SummaryItemPrice>

                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping: </SummaryItemText>
                                <SummaryItemPrice>$5.90</SummaryItemPrice>

                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount:</SummaryItemText>
                                <SummaryItemPrice> $ -5.90</SummaryItemPrice>

                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText >Total:</SummaryItemText>
                                <SummaryItemPrice> $180.00</SummaryItemPrice>
                            </SummaryItem>
                            <Button>CHECKOUT NOW</Button>

                        </Summary>
                    </Bottom>
                </Wrapper>

                <Footer/>


        </Container>
    )
}

export default Cart
