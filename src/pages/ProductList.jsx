import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletters from "../components/Newsletters"
import Footer from "../components/Footer"


const Container = styled.div`


`
const Title = styled.h1`
margin: 20px;

`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`

`

const FilterText = styled.span`
font-size: 20px;
font-weight: 500;
margin-right: 20px;
margin-left: 10px;

`
const Select = styled.select`
padding: 10px;
margin-right: 20px;

`
    
const Option = styled.option``


const ProductList = () => {
    return (
        <Container> 
            <Navbar/>
            <Announcement/>
            <Title>Our Products</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected > 
                    All</Option>
                    <Option>Computer</Option>
                    <Option>TV</Option>
                    <Option>Smartphones</Option>
                    <Option>Laptops</Option>
                    <Option>Gaming</Option>
                    <Option>Drones</Option>

                </Select>
               

                
                    </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                    <Select>

                <Option disabled selected > 
                    Newest</Option>
                    <Option>Price</Option>
                    <Option>Popularity</Option>
                  
                    </Select>
                    </Filter>
                
            </FilterContainer>
        
        <Products/>
       <Newsletters/> 
       <Footer/>

        </Container>   
    )
}

export default ProductList
