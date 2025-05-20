import { useEffect, useState } from "react";
import Country from "./Country";
import './countries.css';
import { list } from "postcss";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleVisitedCountries = country =>{
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h1>React World Tour: {countries.length}</h1>
            <div>
                <h4>Visited Countries :{visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country =><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

           <div className="country-container">
             {
                countries.map((country) =>
                    <Country key={country.cca3}
                handleVisitedCountries={handleVisitedCountries}
                country={country} />
                )
            }
           </div>
        </div>
    );
};

export default Countries;
