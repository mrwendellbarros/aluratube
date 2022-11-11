import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/Timeline'

function HomePage() {
  const estiloDaHomePage = { 
    //backgroundColor: 'red' 
  }

  //console.log(config.playlists);

  return (
    <>
      <CSSReset />
      <div style={estiloDaHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  )
}

export default HomePage

/* function Menu() {
  return <div>Menu</div>
} */

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline(propidades) {
  //console.log("Dentro do componente", propidades.playlists);
  const playListName = Object.keys(propidades.playlists)

  return (
    <StyledTimeline>
      {playListName.map(playListName => {
        const vídeos = propidades.playlists[playListName]
        console.log(playListName)
        console.log(vídeos)
        return (
          <section>
            <h2>{playListName}</h2>
            <div>
              {vídeos.map(vídeos => {
                return (
                  <a href={vídeos.url}>
                    <img src={vídeos.thumb} />
                    <span>{vídeos.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
