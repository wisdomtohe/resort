import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-2.jpeg'
import PropTypes from 'prop-types'

export default function Room({room}) {
    const {name, price, images, slug} = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="chambre unique"/>
                <div className="price-top">
                    <h6> {price}€ </h6>
                    <p>par nuit</p>
                </div>
                <Link to ={`/rooms/${slug}`} className = "btn-primary room-link"> Details   </Link>
            </div>
            <p className="room-info"> {name} </p>
        </article>
    )
}

Room.propTypes = {
    room : PropTypes.string.isRequired,
    slug : PropTypes.string.isRequired,
    images : PropTypes.arrayOf(PropTypes.string).isRequired,
    price : PropTypes.number.isRequired,
}