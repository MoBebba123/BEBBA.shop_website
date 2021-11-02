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
flex-direction: column;


`
const Wrapper = styled.div`
padding: 20px;

width: 40%;
${mobile({width:"75%",paddingLeft:"0px"})}

`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
padding-left: 10px;

`
const Button = styled.button`
margin-top: 15px;
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
margin-left: 10px;
cursor: pointer;
`

const Link = styled.a`
font-size: 15px;
padding-left: 10px;
margin-top: 10px;
text-decoration: underline;
cursor: pointer;
`



const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px;
padding: 10px;
`




const Login = () => {
    return (
       <Container>
              <Wrapper>
            <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username"/>
                     <Input placeholder="Password"/>
                     <Button> LOGIN </Button>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>


                </Form>
            </Wrapper>




       </Container>
    )
}

export default Login
