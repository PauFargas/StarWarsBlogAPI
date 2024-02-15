import React from "react";

export const NotFound = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <div>
                <h1 style={{ color: "yellow" }}><strong>Error 404:<br></br>la página no existe</strong></h1>
                <iframe src="https://giphy.com/embed/2t9mb0HwTVn3mHj8AZ" width="480" height="203" frameBorder="0" className="giphy-embed" allowFullScreen title="Not Found"></iframe>
                <p><a href="https://giphy.com/gifs/mrw-heart-hair-2t9mb0HwTVn3mHj8AZ">via GIPHY</a></p>
            </div>
        </div>
    );
};