import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive" 


const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

${mobile({height:"20vh"})}


`;
const Title = styled.h1`
color:wheat;
margin-bottom: 20px;

`;
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 700;

`;
const Container = styled.div`
margin: 10px;
flex: 1;
height: 50vh;
position: relative;

&:hover ${Image}{
    -webkit-transform: scale(0.5);
          transform: scale(1.04);
}

`;

const Info  = styled.div`
position: absolute;
top: 0;
left: 0%;
height: 100%;
width: 100%;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;


`;




const CategoryItem = ({item}) => {
    return (
        
        
        <Container>
           <Image src={item.img} key={item.id}/>
           <Info>
               <Title>{item.title}</Title>
               <Button >SHOP NOW</Button>


            </Info>


        </Container>
    )
}

export default CategoryItem
