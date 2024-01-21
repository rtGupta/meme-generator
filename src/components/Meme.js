import React from "react";

export default function Meme() {
    return (
        <main>
            <form>
                <div className="form--input">
                    <label>Top Text</label>
                    <input type="text" placeholder="Shut up"/>
                </div>
                <div className="form--input">
                    <label>Bottom Text</label>
                    <input type="text" placeholder="And take my money" />
                </div>
                <button className="form--button" type="submit">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}