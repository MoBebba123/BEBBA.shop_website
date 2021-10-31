import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive" 


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://i.ibb.co/w09TWZ7/sahil-singh-flat-tech.jpg");
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;


`

const Form = styled.div`
display: flex;
flex-wrap: wrap;

`
const Wrapper = styled.div`
padding: 20px;
${mobile({width:"75%",paddingLeft:"0px"})}

width: 40%;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
padding-left: 10px;

`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
margin-left: 10px;
cursor: pointer;
`
const Agreement = styled.span`
font-size: 20px;
margin: 20px 0px;
padding-left: 10px;

`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px;
padding: 10px;
`



const Register = () => {
    return (
        <Container>
            <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
                <Form>
                     <Input placeholder="Name"/>
                     <Input placeholder="Last name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                     <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password"/>
                    <Agreement>By creating an account, I consent to processing of my personal
                        data in accordance with the  <b>PRIVACY POLICY</b></Agreement> 
                    <Button> CREATE </Button>
                </Form>
            </Wrapper>




        </Container>
    )
}

export default Register
