import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

const getUnique = (items, value) =>{
    return [...new Set(items.map(item =>item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {handleChange, type, price, minPrice, maxPrice, minSize, maxSize, capacity, breakfast, pets} = context;
    let types = getUnique(rooms, 'type');
    let people = getUnique(rooms, 'capacity');
    types = ['all', ...types]
    types = types.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    people = people.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="rechercher des chambres"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">Type de chambre</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}> {types} </select>
                </div>
                {/* end select type */}
                {/* invites */}
                <div className="form-group">
                    <label htmlFor="capacity">Invités</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}> {people} </select>
                </div>
                {/* end invites */}
                {/* prix */}
                <div className="form-group">
                    <label htmlFor="price">Prix de la chambre {price}</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange= {handleChange} className="form-control"/>
                </div>
                {/* end prix */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">Taille de la chambre</label>
                    <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value={minSize} onChange= {handleChange} className="size-input"/>
                    <input type="number" name="maxSize" id="size" value={maxSize} onChange= {handleChange} className="size-input"/>
                    </div>
                </div>
                {/* end size */}
                {/* exras */}
                <div className="form-goup">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Ptit dej</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">Animaux</label>
                    </div>
                </div>
                {/* exras */}
            </form>
        </section>
    )
}
