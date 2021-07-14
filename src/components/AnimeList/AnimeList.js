import React from 'react'
import './animelist.css'

const AnimeList = ({ animeList }) => {
    return (
        <div className="main-list">
            <div className="img-list">
                {animeList.map((itemList) => {
                    return (
                        <a href={itemList.url} target="_blank" rel="noreferrer">
                           <img src={itemList.image_url} alt="" height="300px" width="200px"/> 
                        </a>    
                    )
                })}
            </div>
        </div>
    )
}

export default AnimeList
