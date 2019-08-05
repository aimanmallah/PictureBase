import React from 'react'

const ImageCard = (props) => {
    console.log('props', props)
    return (
        <div className="card">
            <h1> {props.urls.full} </h1>
            <img src={props.urls.regular} alt="" />
        </div>
    )

}

export default ImageCard