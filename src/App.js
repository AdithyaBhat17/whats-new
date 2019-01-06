import React from 'react'
import axios from 'axios'

// color palette = // 5A7BB5 • CCDCF2 • F4F6FC • 70DEF1⠀

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }    
    componentDidMount(){
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=apikeygoeshere')
        .then((resp) => {
            let data = this.state.data.concat(resp.data.articles)
            this.setState({data})
        })
    }
    render(){
        return(
            <div>
                Will work on this tmrw
            </div>
        )
    }
}