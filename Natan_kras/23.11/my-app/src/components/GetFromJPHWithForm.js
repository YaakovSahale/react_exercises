import axios from "axios";
import { Component } from "react";

export default class GetFromJPH extends Component{
    state = {url:'',urlLength :''}
    render(){
        const saveUrl = (e) => this.setState({url:e.target.value});
        const getUrl = (e) => {
            const  url = this.state.url
            axios
            .get(url)
            .then(res => {this.setState({urlLength : res.data.length})})
            .catch(err => console.log(err))
        }
        
        return(
            <div>
                <h1>Json placeholder</h1>
                <input onChange={saveUrl} type="text" placeholder="enter URL" />
                <button onClick={getUrl}>Get</button><br/>
                <p>{this.state.urlLength}</p>
            </div>
        )
    }
}