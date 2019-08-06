import React from 'react'
import axios from 'axios'

import ImageCard from './ImageCard'

class ImageIndex extends React.Component {
    constructor() {
        super()
        this.state = {
            data : [],
            search: ''
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
        console.log('this.state.search', this.state.search)
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


    render(){
        if(!this.state.data.results) return null
        console.log('state', this.state)
        return(
            <div className="body">
                <div clasName="header">
                </div>
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
                                value={this.state.search}
                            >
                            </input>
                            <button 
                                type="button" 
                                onClick={this.handleSubmit}
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="popular">
                        <button>Nature</button>
                        <button>Wallpapers</button>
                        <button>Business</button>
                        <button>Travel</button>
                        <button>Fashion</button>
                    </div>

                    <div className="index">
                        {this.state.data.results.map(image => 
                            <div key={image.id} className="card">
                                <ImageCard {...image} />
                            </div>
                        )}
                    </div>

                    <div className="footer">
                        <h1>FOOTER</h1>
                    </div>

                </section>
            </div>
        )
    }
}

export default ImageIndex