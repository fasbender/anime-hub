import React from 'react'
import './top.css'

const Top = ({ topAnime }) => {
    return (
        <div className="main-top">
            <h3 style={{fontFamily: 'Bebas Neue', letterSpacing: '2px'}}>Top 5 Anime</h3>
            <br />
            <br />
            <div className="top-list">
                {topAnime.map((topItem) => {
                    return (
                        <ul key={topItem.title}>
                            <li><a href={topItem.url} target="_blank" rel="noreferrer">{topItem.title}</a></li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default Top
