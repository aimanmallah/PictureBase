import React from 'react'
import axios from 'axios'

import ImageCard from './ImageCard'

class ImageIndex extends React.Component {
    constructor() {
        super()
        this.state = {
            data : [],
            search: 'fish'
        }
    }


    componentDidMount = () => {
        axios.get('https://api.unsplash.com/search/photos/', {
            params: {
                client_id: '817944c4f33c3d0024d8e30a6376e884a1dd5f75f89649a44c3c0b56c4f9267f',
                query: this.state.search,
                per_page: 100
            }
        })
        .then( (res) => this.setState({ data: res.data }) )
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
      }

    handleSubmit = () => {
        axios.get('https://api.unsplash.com/search/photos/', {
            params: {
                client_id: '817944c4f33c3d0024d8e30a6376e884a1dd5f75f89649a44c3c0b56c4f9267f',
                query: this.state.search,
                per_page: 100
            }
        })
    }


    render(){
        if(!this.state.data.results) return null
        console.log('state', this.state.data.results)
        return(
            <section>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={this.handleChange}
                        value={this.state.search}
                    >
                    </input>
                    <button type="button" onSubmit={this.handleSubmit}>Click Me </button>
                </div>

                <div className="index">
                    {this.state.data.results.map(image => 
                        <div key={image.id} className="card">
                            <ImageCard {...image} />
                        </div>
                    )}

                </div>

            </section>
        )
    }
}

export default ImageIndex