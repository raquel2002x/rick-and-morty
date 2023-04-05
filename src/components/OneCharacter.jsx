import React, {useEffect, useState} from 'react'
import { useParams, Link} from 'react-router-dom'
import '../styles/OneCharacter.css'
function OneCharacter() {

    const param = useParams()
    const [ character, setCharacter] = useState([])
        useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${param.id}`)
        .then((res)=>res.json())
        .then((data)=>setCharacter(data))
    },[param.id]) 

    return(
        <>
        <div className="characterBox">
        <div key={character.id}> 
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} className="characterImg"/>
            <h3>Species: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Status: {character.status}</h3>
            <Link to='/'> <buttom className= "buttomBack"> Back </buttom> </Link>
        </div>
        </div>
        </>
    )
}

export default OneCharacter
