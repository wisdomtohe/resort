import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import defaultBcg from '../images/room-1.jpeg'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug : this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;

    componentDidMount(){

    }

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        if (!room){
            return <div className="error">
                <h3>Cette chambre est introuvable</h3>
                <Link to="/rooms" className="btn-primary">Retourner aux chambres</Link>
            </div>
        }
        const {breakfast, pets, price, name, description, capacity, images, size, extras} = room;
        const [mainImg, ...defaultImg] = images;

        return (
            <>
            <StyledHero img = {mainImg || this.state.defaultBcg}>
                <Banner title={`chambre ${name}`}>
                    <Link to= "/rooms" className="btn-primary">Retourner aux chambres</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index)=>{
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">  
                        <h3>Description</h3>
                        <p> {description} </p>
                    </article>
                    <article className="info">
                        <h3>infos</h3>
                        <h6>Prix: {price}‎€ </h6>
                        <h6>Taille: {size}‎ </h6>
                        <h6>Capacité maximale: {""} {capacity >1 ? `${capacity} personnes` :  `${capacity} personne`}‎ </h6>
                        <h6> {pets? "Animaux autorisés" : "Animaux non autorisés"} </h6>
                        <h6> {breakfast && "Ptits dej gratuits inclus"} </h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}> *{item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}

