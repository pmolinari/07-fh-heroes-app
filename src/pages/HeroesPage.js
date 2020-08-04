import React from 'react'
import { useParams, Redirect } from 'react-router-dom'

const HeroesPage = () => {

    const { id } = useParams();

    // const hero = getHeroById( heroId );

    // Simulo no haber hero
    const hero = (id === '22') ? { name: 'Pepe', age: '22'} : undefined;

    if( !hero ) {
        return <Redirect to='/' />
    }

    const { name, age } = hero;

    return (
        <div>
            <h1>Heroes Page</h1>
            <p>Recibimos el parametros { id }</p>
            <p>Y ademas se llama { name } y tiene { age } años</p>
        </div>
    )
}

export default HeroesPage
