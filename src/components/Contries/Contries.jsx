import { useEffect, useState } from "react";


const Contries = () => {
    const [contries, setContries] = useState([]);

    useEffect((() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => console.log(data));
    }),[])
    return (
        <div>
            <h1>React World Tour</h1>
            
        </div>
    );
};

export default Contries;