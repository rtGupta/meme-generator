import React from "react";
import memesData from "../memesData";

export default function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        let memes = allMemeImages.data.memes;
        let randIdx = Math.floor(Math.random() * memes.length);
        const imageURL = memes[randIdx].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: imageURL
        }))
    }

    return (
        <main>
            <div className="form">
                <div className="form--input">
                    <label>Top Text</label>
                    <input type="text" placeholder="Shut up"/>
                </div>
                <div className="form--input">
                    <label>Bottom Text</label>
                    <input type="text" placeholder="And take my money" />
                </div>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img className="meme--image" src={meme.randomImage} alt="Meme Image" />
        </main>
    )
}