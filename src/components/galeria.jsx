import { useEffect, useState } from "react";

function Galeria(){
    const [fotos , setfotos] = useState("fotos de animais");

    useEffect( () => {
        getfoto();
     }, []);

     const getfoto = async() => {
        
        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/5" , {
            method: "GET",
            headers:{
                accept:"application/json",
            },
        });
        const data =await response.json();
        setfotos(data.image_link);
        console.log(fotos);
     };
    

     return(
            <div>
            <h1>bem vindo a galeria</h1>
            <main>
                <img src={getfoto()} alt="fotos"></img>
            </main>
            </div>
     );
}
export default Galeria;