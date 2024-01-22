import React from "react";
import memesData from "../memesData";

export default function Meme() {
    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useState(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then((res) => setAllMemeImages(res.data.memes))
    }, [])

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMemeImage() {
        let randIdx = Math.floor(Math.random() * allMemeImages.length);
        const imageURL = allMemeImages[randIdx].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: imageURL
        }))
    }

    return (
        <main>
            <div className="form">
                <div className="form--input">
                    <label htmlFor="top-text">Top Text</label>
                    <input 
                        id="top-text" 
                        type="text" 
                        placeholder="Shut up"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}    
                    />
                </div>
                <div className="form--input">
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input 
                        id="bottom-text" 
                        type="text" 
                        placeholder="And take my money" 
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} alt="Meme Image" />
                <h2 className="meme--topText top">{meme.topText}</h2>
                <h2 className="meme--bottomText bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}