import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import {Link} from 'react-router-dom'

export default function Home(){
    return (
        <>
            <Hero>
                <Banner title = "Chambres luxieuses" subtitle = "Deluxe à partir de 350 Euros">
                    <Link to="/rooms" className = "btn-primary">Nos chambres</Link>
                </Banner>
             </Hero>
             <Services/>
             <FeaturedRooms />
        </>
    )
}
