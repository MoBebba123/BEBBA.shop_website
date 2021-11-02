import React from 'react'
import Announcement from '../components/Announcement'
import Announcement2 from '../components/Announcement2'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletters from '../components/Newsletters'
import Products from '../components/Products'
import Slider from '../components/Slider'




const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
           <Slider/>
           <Categories/>
           <Announcement2/>
           <Products/>
           <Newsletters/>
           <Footer/>
        </div>
    )
}

export default Home
