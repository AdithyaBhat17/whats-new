import React from 'react'
import axios from 'axios'
import { Nav, Thumbnail, Img } from './style'
import Navbar from './Navbar'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            loading: false
        }
    }    
    componentDidMount(){
        axios.get(`https://newsapi.org/v2/everything?q=everything&apiKey=APIKEYHERE`)
        .then((resp) => {
            let data = this.state.data.concat(resp.data.articles)
            console.log(data)
            this.setState({
                data,
                loading:true
            })
        })
    }
    render(){
        const { data } = this.state
        return(
            <div>
                <Nav className="container">
                    <Navbar/>
                </Nav>
                <div className="container">
                    <div className="row">
                        {data && data.map(article => (
                            <a href={article.url} 
                            key={article.title} 
                            className="col-md-4 col-sm-12"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <Thumbnail className="thumbnail">
                                    <Img src={article.urlToImage} alt={article.title}/>
                                    <h5>{article.title}</h5>
                                </Thumbnail>
                            </a>                                                  
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}