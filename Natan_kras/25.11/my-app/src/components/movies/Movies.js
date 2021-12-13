import { Component } from 'react'
import CardMovie from './MovieCard'

export default class Movies extends Component {
    state={
        movies:[
            {title:"extinction",releaseYear: 2018, img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.arm-film.com%2Fwp-content%2Fuploads%2F2018%2F07%2FExtinction.jpg&f=1&nofb=1"},
            {title:"pixels",releaseYear: 2014, img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6gxyUgLT8a7olwegSRmtTgHaKX%26pid%3DApi&f=1"},
            {title:"the Host",releaseYear: 1998, img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2I_y0eU2q-MXUivKZW5PhQHaKm%26pid%3DApi&f=1"}
        ]
    }
    render() {
        return (
            <div>
              {this.state.movies.map((movie,i) => {
                  return(
                      <CardMovie key={i} movie={movie}/>
                  )
              })}  
            </div>
        )
    }
}
