import React, { Component } from 'react'
import Title from './Title'
import {FaBeer, FaHiking, FaShuttleVan, FaCocktail} from 'react-icons/fa'

export default class Services extends Component {
    state ={
        services : [
            {
                icon : <FaCocktail />,
                title : "Coctails offerts",
                info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, officia?'
            },
            {
                icon : <FaShuttleVan />,
                title : "Shuttles gratuits",
                info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, officia?'
            },
            {
                icon : <FaHiking />,
                title : "Hikings infinis",      
                info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, officia?'
            },
            {
                icon : <FaBeer />,
                title : "Les meilleures bières",
                info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, officia?'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title="services" />
                <div className="services-center">
                      {this.state.services.map((item, index)=> {
                              return <article key ={index} className="service">
                                  <span>
                                      {item.icon}
                                  </span>
                                  <h6> {item.title} </h6>
                                    <p> {item.info} </p>
                              </article>
                          })
                      }
                </div>
            </section>
            
        )
    }
}
