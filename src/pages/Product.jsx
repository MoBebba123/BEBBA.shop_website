import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletters from '../components/Newsletters'
import {mobile} from "../responsive" 


const Container = styled.div`

overflow: hidden;
`
const Wrapper = styled.div`

height: 100vh;
width: 100vw;
display:flex;
${mobile({flexDirection: "column"})}
${mobile({ marginBottom:"60px"})};
margin-bottom: 100px;


`
const TextContainer = styled.div`
flex: 1;
display: flex;
justify-content: center;
flex-direction: column;
${mobile({paddingLeft:"40px"})};


`

const ImgContainer = styled.div`

flex: 1;
`
const Image = styled.img`
margin-top: 80px;
width: 60%;
margin-left: 100px;


`
const Title = styled.h1``

const Desc = styled.p`
padding-right: 100px;
margin-top: 50px;

 
`
const Price = styled.h3`
margin-top: 20px;
font-size: 30px;
font-weight: 300;
font-family:  sans-serif;

`
const Button = styled.button`
background: #f04704b8;
width: 180px;
	color: #fff;
	padding: 8px 30px ;
	margin: 20px 0;
	border-radius: 30px;
     font-family: sans-serif;
     border: none;
     cursor: pointer;
     &:hover {
    background-color: #613319;
    
  }
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
` 
const Filter = styled.div`
display: flex;
align-items: center;
margin: 10px 0;


` 
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
margin-right: 20px;
` 
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
` 
const FilterSize = styled.select`
margin-top: 10px;
padding: 5px;

` 
const FilterOption = styled.div``
const FilterSizeOption = styled.option``
const AddContainer = styled.div`

`
const Amountcontainer = styled.div`
display: flex;
align-items: center;
margin: 10px 0px;
`
const Amount = styled.div`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;

`

const Product = () => {


    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                <Image src="https://i.ibb.co/0qmGS4Q/hmgoepprod.jpg"/>
                </ImgContainer>
                <TextContainer>
                <Title>Waisted blazer</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco</Desc>

                      <Price>$40</Price>
                        <FilterContainer>
                            <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                            </Filter>
                            <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                        <Amountcontainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </Amountcontainer>
                        <Button >ADD TO CART &#8594;</Button>


                        </AddContainer>
                     
                     
                     
                     

                </TextContainer>




            </Wrapper>




            <Newsletters/>
            <Footer/>
            



        </Container>
    )
}

export default Product
