
import { useState } from 'react';
import './Country.css'
import './countries.css';

const Country = ({country, handleVisitedCountries}) => {
    const {name,flags,population,area} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    // console.log(handleVisitedCountries)

    return (
        <div className={`box ${visited ? 'visited' : 'non-visited'}`}>
            <h2 style={{color: visited ? 'purple' : 'white'}}>Name :{name.common}</h2>
            {flags?.png &&<img src={flags.png} alt="Country Flag"/>}
            <p>Population: {population?.toLocaleString() || "N/A"}</p>
            <p>Area: {area?.toLocaleString()} km²</p>
             
             <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={handleVisited}> {visited ? 'Visited' : 'Going'}</button>
            {visited ?'i have visited this country.':'i want to visit'}
        </div>
    );
};

export default Country;