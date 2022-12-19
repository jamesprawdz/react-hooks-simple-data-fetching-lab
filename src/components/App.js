import React, {useEffect, useState} from "react";

const App = () =>{
const [randomDogPic, setRandomDogPic] = useState(null);

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then ((res) => res.json())
    .then ((data) => {
        setRandomDogPic(data.message);
    })
}, []);

if (!randomDogPic) return <p>Loading...</p>;

    return <img src={randomDogPic} alt="A Random Dog" />;
}

export default App;