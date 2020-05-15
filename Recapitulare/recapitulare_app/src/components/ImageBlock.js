import React from 'react';

function ImageBlock() {
    return (
        <div className="image-block">
            <img src="images/pila.jpg" alt="pila" />
            <div className="image-block-content">
                <h3 className="image-block-title"> Pila </h3>
                <a href="/">How to use</a>
            </div>
        </div>
    );
}

export default ImageBlock;