import React from 'react';
import './ImageBlock.css';

function ImageBlock(props) {
    let className = "image-block ";
    if (props.className) {
        className += props.className;
    }
    return (
        <div className={className}>
            <div className="image-block-img-wrapper">
                <img className="image-block-img" src={props.img} alt="pila" />
            </div>
            <div className="image-block-content">
                <h3 className="image-block-title"> {props.weapon_name} </h3>
                <a className="image-block-link" href="/">How to use</a>
            </div>
        </div>
    );
}

export default ImageBlock;