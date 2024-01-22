import React from "react";
import memesData from "../memesData";

export default function Meme() {
    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value
        }))
    }

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