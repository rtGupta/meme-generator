import React from "react";
import memesData from "../memesData";

export default function Meme() {
    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");

    function getMemeImage() {
        let memes = memesData.data.memes;

        let randIdx = Math.floor(Math.random() * memes.length);
        const url = memes[randIdx].url;
        setMemeImage(url);
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
            <img className="meme--image" src={memeImage} alt="Meme Image" />
        </main>
    )
}