import React from 'react'
import Room from './Room'

export default function RoomsList({rooms}) {
    if (rooms.length === 0){
        return <div className="empty-search">
            <h3> Malheureusement aucune chambre ne correspond à votre  recherche</h3>
        </div>
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map( item=> {
                    return <Room key= {item.id} room = {item}/>
                })}
            </div>
        </section>
    )
}