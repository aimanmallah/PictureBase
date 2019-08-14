import React from 'react'
import axios from 'axios'

import ImageCard from './ImageCard'

class ImageIndex extends React.Component {
    constructor() {
        super()
        this.state = {
            data : [],
            search: 'nature'
        }
    }


    componentDidMount = () => {
        axios.get('https://api.unsplash.com/search/photos/', {
            params: {
                client_id: '817944c4f33c3d0024d8e30a6376e884a1dd5f75f89649a44c3c0b56c4f9267f',
                query: this.state.search,
                per_page: 99,
                orientation: 'landscape'
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
                per_page: 99,
                orientation: 'landscape'
            }
        })
        .then(res => this.setState({data : res.data}))
    }

    handleButton = (e) => {
        axios.get('https://api.unsplash.com/search/photos/', {
            params: {
                client_id: '817944c4f33c3d0024d8e30a6376e884a1dd5f75f89649a44c3c0b56c4f9267f',
                query: e.target.value,
                per_page: 99,
                orientation: 'landscape'
            }
        })
        .then(res => this.setState({data : res.data}))
    }


    render(){
        if(!this.state.data.results) return null
        return(
            <div className="body">
                <section className="wrapper">

                    <div className="header">
                        <div className="leftside">
                            <h1>PicBase.</h1>
                            <h4>Powered by Unsplash API.</h4>
                        </div>
                        <div className="rightside">
                            <input
                                type="text"
                                placeholder="Search free high-resolution photos"
                                onChange={this.handleChange}
                            >
                            </input>
                            <button 
                                type="button" 
                                onClick={this.handleSubmit}
                            >
                                search.
                            </button>
                        </div>
                    </div>

                    <div className="popular">
                        <button
                            type="button"
                            value="nature"
                            onClick={this.handleButton}
                        >
                            nature.
                        </button>

                        <button
                            type="button"
                            value="wallpaper"
                            onClick={this.handleButton}
                        >
                            wallpapers.
                        </button>

                        <button
                            type="button"
                            value="business"
                            onClick={this.handleButton}
                        >
                            business.
                        </button>

                        <button
                            type="button"
                            value="travel"
                            onClick={this.handleButton}
                        >
                            travel.
                        </button>

                        <button
                            type="button"
                            value="fashion"
                            onClick={this.handleButton}
                        >
                            fashion.
                        </button>
                    </div>

                    <div className="index">
                        {this.state.data.results.map(image => 
                            <div key={image.id} className="card">
                                <ImageCard {...image} />
                            </div>
                        )}
                    </div>

                    <div className="footer">
                        <h4>	&reg; Developed by Aiman</h4>
                    </div>

                </section>
            </div>
        )
    }
}

export default ImageIndex