import { useEffect, useState } from "react";

function AnimaisRandom(){
    const[animal, setanimal] = useState("Animais Aleatorios");

    useEffect( () => {
       getanimal();
    }, []);

    const getanimal = async () => {
        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        const data = await response.json();
        setanimal(data);
      };

    return(
        <div className="container">
            <h1>animais aleatorios</h1>

            <img src= {animal.image_link} alt="img_animal"></img>
            <ul>
                <li>nome:{animal.name}</li>
                <li>nome em LATIM{animal.latin_name}</li>
                <li>habitat:{animal.habitat}</li>
                <li>dieta{animal.diet}</li>
                <li>localização:{animal.geo_range}</li>
            </ul>
            <button type="button" className="btn" onClick={getanimal}>gerar novo animal</button>
        </div>
    );
}

export default AnimaisRandom;

