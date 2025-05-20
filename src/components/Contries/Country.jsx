
import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    const {name,flags,population,area} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return (
        <div className='box'>
            <h2>Name :{name?.common}</h2>
            {flags?.png &&<img src={flags.png} alt="Country Flag"/>}
            <p>Population: {population?.toLocaleString() || "N/A"}</p>
            <p>Area: {area?.toLocaleString()} km²</p>
         
            <button onClick={handleVisited}> {visited ? 'Visited' : 'Going'}</button>
            {visited ?'i have visited this country.':'i want to visit'}
        </div>
    );
};

export default Country;