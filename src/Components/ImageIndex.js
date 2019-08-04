import React from 'react'

import axios from 'axios'

class ImageIndex extends React.Component {
    constructor() {
        super()
        this.state = {
            data : [],
            search: 'fish'
        }
    }

    componentWillMount() {
        axios.get('https://api.unsplash.com/search/photos/', {
            params: {
                client_id: '817944c4f33c3d0024d8e30a6376e884a1dd5f75f89649a44c3c0b56c4f9267f',
                query: this.state.search,
                per_page: 100
            }
        })
        .then( (res) => this.setState({ data: res.data }) )
    }

    render(){
        console.log('state', this.state.data)
        return(
            <h1> Hello </h1>
        )
    }
}

export default ImageIndex