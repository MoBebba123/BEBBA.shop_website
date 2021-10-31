import { Input } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'



const Container =styled.div`
background-color: #fcf5f5;
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title =styled.h1`
font-size: 70px;
`
const Description =styled.p`
margin: 20px;
font-size: 24px;
font-weight: 300;
text-align:center;
`

const InputContainer =styled.div`
width: 50%;
height: 30px;
border: 1px solid lightgray;
background-color:white;
justify-content:space-between;
align-items: center;
display: flex;
`
const Button =styled.button`
flex: 1;
border: none;
font-size: 30px;
width: 50%;
background-color: teal;
color: white;
cursor: pointer;
`


const Newsletters = () => {
    return (
        <Container>
            <Title>Newsletters</Title>
            <Description>WHEN SUBSCRIBING TO THE NEWSLETTER, YOU CAN DISCOVER 
                <br/> THE LATEST TRENDS IN THE PREVIEW (YOU CAN UNSUBSCRIBE AT ANY TIME).</Description>
            <InputContainer>
            <Input placeholder="Your E-mail" style={{border:"none",flex:"8", border:"1px solid black",paddingLeft:"20px"}}/>
            <Button>

             <Send/>

            </Button>
            
            
            
            </InputContainer>




        </Container>
    )
}

export default Newsletters
