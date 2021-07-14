import { useState, useEffect } from "react"
import axios from "axios"
import Top from './components/TopAnime/Top';
import AnimeList from "./components/AnimeList/AnimeList";
import './App.css';

function App() {

  const [topAnime, setTopAnime] = useState([])
  const [animeList, setAnimeList] = useState([])

  const TopAnime = async() => {
    const top = await axios.get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
    setTopAnime(top.data.top.slice(0,5))
    setAnimeList(top.data.top)
  }
  
  useEffect(() => {
    TopAnime()
  }, [])
console.log(animeList)
  return (
    <div className="App">
      <div style={{textAlign: 'center', padding: '5%'}}>
        <h1 style={{fontFamily: 'Lobster'}}>Anime Hub</h1>
      </div>
      <div className="mother-container">
        <Top topAnime={topAnime}/>
        <AnimeList animeList={animeList}/>
      </div>
    </div>
  );
}

export default App;
