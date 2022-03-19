import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="container_content">
                    <h1>Welcome to Academy24</h1>
                    <p>A Place where all the curated collections of resources and Details are organised in a serial manner </p>
                </div>
                <div className="container_image">
                    <img src="https://i.pinimg.com/originals/78/5a/1b/785a1b9c359640da6bc9cfe3670b42ba.png" alt="" srcset="" />
                </div>
            </div>
            <div className="open_source">
                <div className="open_source_image">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Opensource.svg/1200px-Opensource.svg.png" alt="" srcset="" className='open_source_image' />
                </div>
                <div className="open_source_content">
                    A Place where all the curated collections of OpenSouce Events/Programms and Details are organised in a serial manner
                </div>
            </div>
        </>
    )
}

export default Home