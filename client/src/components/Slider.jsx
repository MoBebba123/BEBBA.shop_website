import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import styled  from 'styled-components'
import {sliderItems} from "../data"
import {mobile} from "../responsive" 

  

const Button = styled.button`
	background: #f04704b8;
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
`;


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;

${mobile({display:"none"})}



` ;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
cursor: pointer;
margin: auto;
opacity: 0.5;
z-index: 2;
` 
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);


`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};


`
const ImgContainer = styled.div`
height: 100%;
flex: 1;
`
const Image = styled.img`
padding-left: 80px;
padding-top: 120px;
height: 60%;

`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;

`
const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 1px;

`


const Slider = () => {
    const[slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) =>{
        if (direction==="left"){

            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)

        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0 )


        }



    };


    return (
        <Container>
          
          
          <Arrow direction="left" onClick={()=>handleClick("left")}>
              <ArrowLeftOutlined/>
             </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
            <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button className="btn" >EXPLORE NOW &#8594;</Button>
            
            </InfoContainer>
            </Slide>
            ))}

            </Wrapper>

             <Arrow direction="right" onClick={()=>handleClick("right")}>
              <ArrowRightOutlined/>
             </Arrow>

        </Container>
    )
}

export default Slider
