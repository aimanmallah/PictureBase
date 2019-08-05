import React from 'react'

const ImageCard = (props) => {
    console.log('props', props)
    return (
        <div className="card">
            <img src={props.urls.small} alt="" />
        </div>
    )

}

export default ImageCard
